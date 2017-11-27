import _ from 'lodash'
import { login, logout } from '../auth'
import { requiresAdmin } from '../permissions'

const formatErrors = (e) => {
  // If validation errors
  if (e.name === 'ValidationError') {
    //  _.pick({a: 1, b: 2}, 'a') => {a: 1}
    return _.values(e.errors).map(x => _.pick(x, ['path', 'message']))
  } else if (e.errmsg) {
    return [{ path: 'MongoError', message: e.errmsg }]
  }

  return [{ path: 'name', message: 'something went wrong' }]
}

// Resolvers
const resolvers = {
  Query: {
    getUsers: requiresAdmin.createResolver((parent, args, { models, user }) => {
      if (!user) {
        return {
          ok: false,
          errors: [{ message: 'You need to log in to access this view', path: '/gqlusers' }],
        }
      }
      return {
        ok: true,
        users: models.User.find({ owner: user.id }),
      }
    }),
    getUserById: (parent, { id }, { models }) => models.User.findOne({ id }),
    getCurrentUser: (parent, args, { user }) => user,
    findUserByEmail: (parent, { email }, { models }) => models.User.findOne({ email }),
  },

  Mutation: {
    loginUser: (parent, { email, password }, { models, SECRET, SECRET2 }) =>
      login(email, password, models, SECRET, SECRET2),
    logoutUser: (parent, args, { user, SECRET, SECRET2 }) => logout(user, SECRET, SECRET2),
    registerUser: async (parent, args, { models, user }) => {
      try {
        const createdUser = await models.User.create({ ...args, owner: user.id })
        return { ok: true, user: createdUser }
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
