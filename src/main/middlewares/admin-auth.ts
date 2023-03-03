import { makeAuthMiddleware } from './../factories/middlewares/auth-middleware'
import { adaptMiddleware } from './../adapters/express-middleware-adapter'

export const adminAuth = adaptMiddleware(makeAuthMiddleware('admin'))
