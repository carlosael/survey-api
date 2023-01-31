import { LoadAccountByToken } from '@/domain/usescases/load-account-by-token'
import { AccessDeniedError } from '../errors'
import { forbidden, ok } from '../helpers/http/http-helper'
import { HttpRequest, HttpResponse, Middleware } from '../protocols'

export class AuthMiddleware implements Middleware {
  constructor (
    private readonly loadAccountByToken: LoadAccountByToken
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const acessToken = httpRequest.headers?.['x-access-token']
    if (acessToken) {
      const account = await this.loadAccountByToken.load(acessToken)
      if (account) {
        return ok({ accountId: account.id })
      }
    }

    return forbidden(new AccessDeniedError())
  }
}
