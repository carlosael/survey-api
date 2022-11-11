import { MissingParamError } from '../../errors'
import { Validation } from './validation'

export class RequiredFieldsValidation implements Validation {
  private readonly fieldName

  constructor (fieldName: string) {
    this.fieldName = fieldName
  }

  validate (input: any): any {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName)
    }
  }
}
