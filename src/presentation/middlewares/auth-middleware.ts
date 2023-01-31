import { LoadAccountByToken } from '@/domain/usescases/load-account-by-token'
import { AccessDeniedError } from '../errors'
import { forbidden } from '../helpers/http/http-helper'
import { HttpRequest, HttpResponse, Middleware } from '../protocols'

export class AuthMiddleware implements Middleware {
  constructor (
    private readonly loadAccountByToken: LoadAccountByToken
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const acessToken = httpRequest.headers?.['x-access-token']
    if (acessToken) {
      await this.loadAccountByToken.load(acessToken)
    }

    return forbidden(new AccessDeniedError())
  }
}
