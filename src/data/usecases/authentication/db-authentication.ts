import { LoadAccountByEmailRepository } from '../../protocols/db/account/load-account-by-email-repository'
import { UpdateAccessTokenRepository } from '../../protocols/db/account/update-acess-token-repository'
import {
  AuthenticaionModel,
  Authentication,
  HashComparer,
  Encrypter
} from './db-authentication-protocols'

export class DbAuthentication implements Authentication {
  private readonly loadAccountByEmailRepository
  private readonly hashComparer
  private readonly tokenGenerator
  private readonly updateAccessTokenRepository
  constructor (
    loadAccountByEmailRepository: LoadAccountByEmailRepository,
    hashComparer: HashComparer, tokenGenerator: Encrypter,
    updateAccessTokenRepository: UpdateAccessTokenRepository) {
    this.loadAccountByEmailRepository = loadAccountByEmailRepository
    this.hashComparer = hashComparer
    this.tokenGenerator = tokenGenerator
    this.updateAccessTokenRepository = updateAccessTokenRepository
  }

  async auth (authentication: AuthenticaionModel): Promise<string | null> {
    const account = await this.loadAccountByEmailRepository.loadByEmail(authentication.email)
    if (account) {
      const isValid = await this.hashComparer.compare(authentication.password, account.password)
      if (isValid) {
        const token = await this.tokenGenerator.encrypt(account.id)
        await this.updateAccessTokenRepository.updateAccessToken(account.id, token)
        return token
      }
    }
    return null
  }
}
