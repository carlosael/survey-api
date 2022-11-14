import { AuthenticaionModel, Authentication } from '../../../domain/usescases/authentication'
import { LoadAccountByEmailRepository } from '../../protocols/db/load-account-by-email-repository'

export class DbAuthentication implements Authentication {
  private readonly loadAccountByEmailRepository
  constructor (loadAccountByEmailRepository: LoadAccountByEmailRepository) {
    this.loadAccountByEmailRepository = loadAccountByEmailRepository
  }

  async auth (authentication: AuthenticaionModel): Promise<string | null> {
    await this.loadAccountByEmailRepository.load(authentication.email)
    return null
  }
}
