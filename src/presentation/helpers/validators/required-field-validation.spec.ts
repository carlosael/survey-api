import { MissingParamError } from '../../errors'
import { RequiredFieldsValidation } from './required-field-validation.ts'
import { Validation } from './validation'

interface SutTypes {
  sut: Validation
}

const makeSut = (): SutTypes => {
  const sut = new RequiredFieldsValidation('field')
  return {
    sut
  }
}

describe('RequiredField Validation', () => {
  test('Should return a MissingParamError if validation fails', () => {
    const { sut } = makeSut()
    const error = sut.validate({ name: 'any_name' })
    expect(error).toEqual(new MissingParamError('field'))
  })

  test('Should not return if validation succeeds', () => {
    const { sut } = makeSut()
    const error = sut.validate({ field: 'any_name' })
    expect(error).toBeFalsy()
  })
})
