
import { RequiredFieldsValidation, ValidationComposite } from '../../../../../validation/validators/index'
import { Validation } from '../../../../../presentation/protocols/validation'

export const makeAddSurveyValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['question', 'answers']) {
    validations.push(new RequiredFieldsValidation(field))
  }
  return new ValidationComposite(validations)
}
