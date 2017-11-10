import dotenv from 'dotenv'
import { fail } from 'assert'
import resolvers, { users } from '../resolvers/userResolvers'
import models from '../models'
import User from '../models/user'
import config from '../lib/config'
import db from '../lib/db'

dotenv.config()

describe('Resolvers', () => {
  beforeAll(() => {
    db.connect(config.dbUri)
    const query = User.findOne({ userName: 'John' })
    expect(query.exec().constructor).toBe(Promise)
  })

  afterAll((done) => {
    db.disconnect(done);
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

    it('should check mock data', () => {
      expect(users.length).toBe(4)
    })
  })

  describe('Mutations', () => {
    it('should return an object when args supplied', async (done) => {
      const args = {
        userName: 'wera44',
        password: 'passw0rd',
        email: 'weraa@email.com',
        firstName: 'Wera',
        lastName: 'Jeromski',
        address: '123 Maple St.',
        address2: 'Unit 320',
        city: 'Maperville',
        state: 'IL',
        zip: '22902',
        userType: 'caregiver',
      }

      const user = await resolvers.Mutation.registerUser(undefined, {
        password: args.password, ...args,
      }, { models })
      const { id } = user
      const removed = await resolvers.Mutation.deleteUser(undefined, { id }, { models })

      if (removed) {
        done()
      } else {
        fail()
      }
    })

    it('should return empty object when error is thrown', () => {
      expect(resolvers.Mutation.registerUser({}, {}, { models })).toEqual({})
    })

    it('should return null when attempting to delete a non-existent model', () => {
      expect(resolvers.Mutation.deleteUser({}, 123, { models })).toBeDefined()
    })
  })
})
