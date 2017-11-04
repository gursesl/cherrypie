import User from '../user'
import config from '../../lib/config'
import db from '../../lib/db'

describe('User:model', () => {
  beforeAll(() => {
    db.connect(config.dbUri)
    const query = User.findOne({ userName: 'John' })
    expect(query.exec().constructor).toBe(Promise)
  })

  afterAll((done) => {
    db.disconnect(done);
  })

  beforeEach((done) => {
    User.remove((err) => {
      expect(err).toBeNull()
      done()
    })
  })

  afterEach((done) => {
    User.remove((err) => {
      expect(err).toBeNull()
      done()
    })
  })

  it('should not create without username', (done) => {
    User.create({ firstName: 'Jane', lastName: 'Doe' }, (err) => {
      expect(err).toBeDefined()
      done()
    })
  })

  it('should remove trailing spaces from username', async (done) => {
    try {
      const result = await User.create({
        userName: 'username   ',
        password: 'passw0rd',
        email: 'wer@email.com',
        firstName: 'Wera',
        lastName: 'Andersen',
        address: '123 Maple St.',
        address2: 'Unit 320',
        city: 'Maperville',
        state: 'IL',
        zip: '22902',
        userType: 'caregiver',
      })

      expect(result.userName).toBe('username')
      done()
    } catch (err) {
      done(err)
    }
  })
})
