import { AccountModel, AddAccountModel } from '../../../usecases/account/add-account/db-add-account-protocols'

export interface AddAccountRepository {
  add: (accountData: AddAccountModel) => Promise<AccountModel>
}
