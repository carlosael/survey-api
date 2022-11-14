import { AccountModel } from '../../../domain/models/account'

export class LoadAccountByEmailRepository {
  load: (email: string) => Promise<AccountModel> | null
}
