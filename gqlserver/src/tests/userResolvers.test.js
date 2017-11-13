import dotenv from 'dotenv'
import { fail } from 'assert'
import resolvers, { users } from '../resolvers/userResolvers'
import models from '../models'
import User from '../models/user'
import config from '../lib/config'
import db from '../lib/db'

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
  userType: 'caregiver',
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
    it('should return data', () => {
      expect(resolvers.Query.users().length).toBe(4)
    })

    it('getUsers should be defined', () => {
      expect(resolvers.Query.getUsers(undefined, null, { models })).toBeDefined()
    })

    it('getUser should be defined', () => {
      expect(resolvers.Query.getUser(undefined, { id: 1 }, { models })).toBeDefined()
    })

    it('findUserByEmail should be defined', async (done) => {
      const { email } = await User.create(args)
      expect(resolvers.Query.findUserByEmail(undefined, { email }, { models })).toBeDefined()
      done()
    })

    it('should check mock data', () => {
      expect(users.length).toBe(4)
    })
  })

  describe('Mutations', () => {
    it('should return an object when args supplied', async (done) => {
      const user = await resolvers.Mutation.registerUser(
        undefined,
        {
          password: args.password,
          ...args,
        },
        { models }
      )
      const { id } = user
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
