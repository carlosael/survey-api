import { InvalidParamError } from '../../presentation/errors'
import { CompareFieldsValidation } from './compare-fields-validation'
import { Validation } from '../../presentation/protocols/validation'

type SutTypes = {
  sut: Validation
}

const makeSut = (): SutTypes => {
  const sut = new CompareFieldsValidation('field', 'fieldToCompare')
  return {
    sut
  }
}

describe('CompareFields Validation', () => {
  test('Should return a InvalidParamError if validation fails', () => {
    const { sut } = makeSut()
    const error = sut.validate({
      field: 'any_value',
      fieldToCompare: 'wrong_value'
    })
    expect(error).toEqual(new InvalidParamError('fieldToCompare'))
  })

  test('Should not return if validation succeeds', () => {
    const { sut } = makeSut()
    const error = sut.validate({
      field: 'any_value',
      fieldToCompare: 'any_value'
    })
    expect(error).toBeFalsy()
  })
})
