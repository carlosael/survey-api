import { AccountModel } from '../../../domain/models/account'

export class LoadAccountByEmailRepository {
  loadByEmail: (email: string) => Promise<AccountModel> | null
}
