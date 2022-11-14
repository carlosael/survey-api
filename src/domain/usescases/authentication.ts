export interface AuthenticaionModel {
  email: string
  password: string
}

export interface Authentication {
  auth: (authentication: AuthenticaionModel) => Promise<string>
}
