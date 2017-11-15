import _ from 'lodash'
import { login } from '../auth'

const formatErrors = (e, models) => {
  // If validation errors
  if (e.name === 'ValidationError') {
    //  _.pick({a: 1, b: 2}, 'a') => {a: 1}
    return _.values(e.errors).map(x => _.pick(x, ['path', 'message']))
  } else if (e.errmsg) {
    return [{ path: 'MongoError', message: e.errmsg }]
  }

  return [{ path: 'name', message: 'something went wrong' }]
}

export const users = [
  {
    id: '1',
    password: 'passw0rd',
    email: 'wer@email.com',
    fullName: 'Wera George',
    address: '123 Maple St.',
    address2: 'Unit 320',
    city: 'Maperville',
    state: 'IL',
    zip: '22902',
    userType: 'caregiver',
  },
  {
    id: '2',
    password: 'passw0rd',
    email: 'weraa@email.com',
    fullName: 'Smit Georgeh',
    address: '123 Maple St.',
    address2: 'Unit 320',
    city: 'Maperville',
    state: 'IL',
    zip: '22902',
    userType: 'caregiver',
  },
  {
    id: '3',
    password: 'passw0rd',
    email: 'weraa@email.com',
    fullName: 'Angl Georgee',
    address: '123 Maple St.',
    address2: 'Unit 320',
    city: 'Maperville',
    state: 'IL',
    zip: '22902',
    userType: 'caregiver',
  },
  {
    id: '4',
    password: 'passw0rd',
    email: 'weraa@email.com',
    fullName: 'Wera George',
    address: '123 Maple St.',
    address2: 'Unit 320',
    city: 'Maperville',
    state: 'IL',
    zip: '22902',
    userType: 'caregiver',
  },
]
// Resolvers
const resolvers = {
  Query: {
    users: () => users,
    getUsers: (parent, args, { models }) => models.User.find({}),
    getUser: (parent, { id }, { models }) => models.User.findOne({ id }),
    findUserByEmail: (parent, { email }, { models }) => models.User.findOne({ email }),
  },

  Mutation: {
    loginUser: (parent, { email, password }, { models, SECRET, SECRET2 }) =>
      login(email, password, models, SECRET, SECRET2),
    registerUser: async (parent, args, { models }) => {
      try {
        const user = await models.User.create(args)
        return { ok: true, user }
      } catch (error) {
        return {
          ok: false,
          errors: formatErrors(error, models),
        }
      }
    },
    deleteUser: (parent, { id }, { models }) => models.User.findByIdAndRemove(id),
  },
}

export default resolvers
