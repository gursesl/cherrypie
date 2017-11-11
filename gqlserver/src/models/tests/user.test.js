import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import User from '../user'
import config from '../../lib/config'
import db from '../../lib/db'

dotenv.config()

describe('User:model', () => {
  beforeAll(() => {
    db.connect(config.dbUri)
    const query = User.findOne({ email: 'john@john.com' })
    expect(query.exec().constructor).toBe(Promise)
  })

  afterAll((done) => {
    db.disconnect(done);
  })

  // beforeEach((done) => {
  //   User.remove((err) => {
  //     expect(err).toBeNull()
  //     done()
  //   })
  // })

  // afterEach((done) => {
  //   User.remove((err) => {
  //     expect(err).toBeNull()
  //     done()
  //   })
  // })

  it('should not create without username', (done) => {
    User.create({ fullName: 'Jane Joe' }, (err) => {
      expect(err).toBeDefined()
      done()
    })
  })

  it('should remove trailing spaces from username', async (done) => {
    try {
      const result = await User.create({
        email: 'wesdfsdf234234234rs@sdfsdf334242email.com        ',
        password: bcrypt.hashSync('passw0rd', 12),
        fullName: 'Wera Wang Jr.',
        address: '123 Maple St.',
        address2: 'Unit 320',
        city: 'Maperville',
        state: 'IL',
        zip: '22902',
        userType: 'caregiver',
      })

      expect(result.email).toBe('wesdfsdf234234234rs@sdfsdf334242email.com')
      expect(bcrypt.compareSync('passw0rd', result.password)).toBeTruthy()

      const deleted = await User.remove({ email: 'wesdfsdf234234234rs@sdfsdf334242email.com' })
      expect(deleted.result.n).toEqual(1)
      expect(deleted.result.ok).toEqual(1)
      done()
    } catch (err) {
      done(err)
    }
  })
})
