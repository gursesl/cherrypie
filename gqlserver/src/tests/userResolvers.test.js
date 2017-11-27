import dotenv from 'dotenv'
import { fail } from 'assert'
import resolvers from '../resolvers/user'
import models from '../models'
import User from '../models/user'
import config from '../lib/config'
import db from '../lib/db'
import * as c from '../constants'

dotenv.config()

const args = {
  password: 'passw0rd',
  email: 'weraa@email.com',
  fullName: 'Wera Wang Jr.',
  address: '123 Maple St.',
  address2: 'Unit 320',
  city: 'Maperville',
  state: 'IL',
  zip: '22902',
  userType: c.USER_TYPE_CAREGIVER,
}

const user = {
  id: 123,
}

describe('UserResolvers', () => {
  beforeAll(() => {
    db.connect(config.dbUri)
    const query = User.findOne({ email: 'John' })
    expect(query.exec().constructor).toBe(Promise)
  })

  afterEach((done) => {
    User.remove({ email: 'weraa@email.com' }, () => {
      done()
    })
  })

  afterAll((done) => {
    db.disconnect(done)
  })

  describe('Query', () => {
    it('getUsers should be defined', () => {
      expect(resolvers.Query.getUsers.name).toBe('baseResolver')
    })

    it('getUser should be defined', () => {
      expect(resolvers.Query.getUserById(undefined, { id: 1 }, { models })).toBeDefined()
    })

    it('findUserByEmail should be defined', async (done) => {
      const { email } = await User.create(args)
      expect(resolvers.Query.findUserByEmail(undefined, { email }, { models })).toBeDefined()
      done()
    })
  })

  describe('Mutations', () => {
    // TODO: Fake auth needed
    xit('should return an object when args supplied', async (done) => {
      const userResponse = await resolvers.Mutation.registerUser(
        undefined,
        {
          password: args.password,
          ...args,
        },
        { models, user }
      )
      const { id } = userResponse.user
      const removed = await resolvers.Mutation.deleteUser(undefined, { id }, { models })

      if (removed) {
        done()
      } else {
        fail()
      }
    })

    it('should return validation errors', async (done) => {
      try {
        await resolvers.Mutation.registerUser({}, {}, { models })
      } catch (error) {
        const keys = Object.keys(error.errors)
        expect(keys.length).toBe(4)
        expect(keys).toEqual(['userType', 'fullName', 'password', 'email'])
      }
      done()
    })

    it('should return null when attempting to delete a non-existent model', () => {
      expect(resolvers.Mutation.deleteUser({}, 123, { models })).toBeDefined()
    })
  })
})
