import { serverError } from './../helpers/http/http-helper'
import { LoadAccountByToken } from '@/domain/usescases/load-account-by-token'
import { AccessDeniedError } from '../errors'
import { forbidden, ok } from '../helpers/http/http-helper'
import { HttpRequest, HttpResponse, Middleware } from '../protocols'

export class AuthMiddleware implements Middleware {
  constructor (
    private readonly loadAccountByToken: LoadAccountByToken,
    private readonly role?: string
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const acessToken = httpRequest.headers?.['x-access-token']
      if (acessToken) {
        const account = await this.loadAccountByToken.load(acessToken, this.role)
        if (account) {
          return ok({ accountId: account.id })
        }
      }
      return forbidden(new AccessDeniedError())
    } catch (error) {
      return serverError(error)
    }
  }
}
