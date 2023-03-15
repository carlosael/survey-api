import { forbidden, serverError } from './../../../helpers/http/http-helper'
import { InvalidParamError } from './../../../errors/invalid-param-error'
import { HttpRequest, HttpResponse, Controller, LoadSurveyById } from './save-survey-result-controller-protocols'

export class SaveSurveyResultContoller implements Controller {
  constructor (private readonly loadSurveyById: LoadSurveyById) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const survey = await this.loadSurveyById.loadById(httpRequest.params.surveyId)
      if (!survey) {
        return forbidden(new InvalidParamError('surveyId'))
      }
      return null
    } catch (error) {
      return serverError(error)
    }
  }
}
