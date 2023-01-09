export interface AddSurveyModel {
  question: string
  answers: SurveyAnswer[]
}

export interface SurveyAnswer {
  imagem: string
  answers: string
}

export interface AddSurvey {
  add: (data: AddSurveyModel) => Promise<void>
}
