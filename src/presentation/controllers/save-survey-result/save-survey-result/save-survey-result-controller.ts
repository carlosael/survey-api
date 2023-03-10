import { HttpRequest, HttpResponse, Controller, LoadSurveyById } from './save-survey-result-controller-protocols'

export class SaveSurveyResultContoller implements Controller {
  constructor (private readonly loadSurveyById: LoadSurveyById) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    await this.loadSurveyById.loadById(httpRequest.params.surveyId)
    return null
  }
}
