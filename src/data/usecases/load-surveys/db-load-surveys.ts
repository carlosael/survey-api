import { LoadSurveysRepository } from './../../protocols/db/survey/load-surveys-repository'
import { SurveyModel } from './../../../domain/models/survey'
import { LoadSurveys } from './../../../domain/usescases/load-surveys'

export class DbLoadSurveys implements LoadSurveys {
  constructor (private readonly loadSurveysRepository: LoadSurveysRepository) {}

  async load (): Promise<SurveyModel[]> {
    const surveys = await this.loadSurveysRepository.loadAll()
    return surveys
  }
}
