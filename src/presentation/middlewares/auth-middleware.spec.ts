import { LoadAccountByToken } from '@/domain/usescases/load-account-by-token'
import { AccountModel } from '../../domain/models/account'
import { AccessDeniedError } from '../errors/access-denied-error'
import { forbidden } from './../helpers/http/http-helper'
import { AuthMiddleware } from './auth-middleware'

const makeFakeAccount = (): AccountModel => ({
  id: 'valid_id',
  name: 'valid_name',
  email: 'valid_email@email.com',
  password: 'hashed_password'
})

describe('Auth Middleware', () => {
  test('Should return 403 if no x-acess-token exists in headers', async () => {
    class LoadAccountByTokenStub implements LoadAccountByToken {
      async load (accessToken: string, role?: string): Promise<AccountModel> {
        return await new Promise(resolve => resolve(makeFakeAccount()))
      }
    }
    const loadAccountByTokenStub = new LoadAccountByTokenStub()
    const sut = new AuthMiddleware(loadAccountByTokenStub)
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(forbidden(new AccessDeniedError()))
  })

  test('Should call LoadAccountByToken with correct accessToken', async () => {
    class LoadAccountByTokenStub implements LoadAccountByToken {
      async load (accessToken: string, role?: string): Promise<AccountModel> {
        return await new Promise(resolve => resolve(makeFakeAccount()))
      }
    }
    const loadAccountByTokenStub = new LoadAccountByTokenStub()
    const loadSpy = jest.spyOn(loadAccountByTokenStub, 'load')
    const sut = new AuthMiddleware(loadAccountByTokenStub)
    await sut.handle({
      headers: {
        'x-access-token': 'any_token'
      }
    })
    expect(loadSpy).toHaveBeenCalledWith('any_token')
  })
})
