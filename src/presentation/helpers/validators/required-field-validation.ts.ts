import { MissingParamError } from '../../errors'
import { Validation } from '../../protocols/validation'

export class RequiredFieldsValidation implements Validation {
  constructor (private readonly fieldName: string) {
    this.fieldName = fieldName
  }

  validate (input: any): any {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName)
    }
  }
}
