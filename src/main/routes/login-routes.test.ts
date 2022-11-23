import { hash } from 'bcrypt'
import { Collection } from 'mongodb'
import request from 'supertest'
import { MongoHelper } from '../../infra/db/mongodb/helper/mongo-helper'
import app from '../config/app'

let accountCollection: Collection

describe('Login Routes', () => {
  beforeAll(async () => {
    return await MongoHelper.connect(process.env.MONGO_URL as string)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /signup', () => {
    test('Should return 200 on sign-up', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: 'Carlos',
          email: 'carlos.albert@hotmail.com',
          password: '123',
          passwordConfirmation: '123'
        })
        .expect(200)
    })
  })

  describe('POST /login', () => {
    test('Should return 200 on login', async () => {
      const password = await hash('123', 12)
      await accountCollection.insertOne({
        name: 'Carlos',
        email: 'carlos.albert@hotmail.com',
        password
      })
      await request(app)
        .post('/api/login')
        .send({
          email: 'carlos.albert@hotmail.com',
          password: '123'
        })
        .expect(200)
    })

    test('Should return 401 on login', async () => {
      await request(app)
        .post('/api/login')
        .send({
          email: 'carlos.albert@hotmail.com',
          password: '123'
        })
        .expect(401)
    })
  })
})
