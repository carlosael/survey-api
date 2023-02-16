import { AccountModel } from '../../../../domain/models/account'

export class LoadAccountByTokenRepository {
  loadByToken: (token: string, role?: string) => Promise<AccountModel> | null
}
