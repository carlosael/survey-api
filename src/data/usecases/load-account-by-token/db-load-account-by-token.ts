import { Decrypter } from '@/data/protocols/criptography/decrypter'
import { AccountModel } from '@/domain/models/account'
import { LoadAccountByToken } from './../../../domain/usescases/load-account-by-token'

export class DbLoadAccountByToken implements LoadAccountByToken {
  constructor (private readonly decrypter: Decrypter) {}

  async load (accessToken: string, role?: string): Promise<AccountModel> {
    await this.decrypter.decrypt(accessToken)
    return null
  }
}
