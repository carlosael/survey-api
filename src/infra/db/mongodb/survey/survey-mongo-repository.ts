import { SurveyModel } from './../../../../domain/models/survey'
import { LoadSurveysRepository } from './../../../../data/protocols/db/survey/load-surveys-repository'
import { AddSurveyRepository } from '@/data/protocols/db/survey/add-survey-repository'
import { AddSurveyModel } from '@/domain/usescases/add-survey'
import { MongoHelper } from '../helper/mongo-helper'

export class SurveyMongoRepository implements AddSurveyRepository, LoadSurveysRepository {
  async add (surveyData: AddSurveyModel): Promise<void> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    await surveyCollection.insertOne(surveyData)
  }

  async loadAll (): Promise<SurveyModel[]> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    const surveys = await surveyCollection.find().toArray()
    return surveys
  }
}
