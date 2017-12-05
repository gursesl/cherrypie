import _ from 'lodash'
import { PubSub, withFilter } from 'graphql-subscriptions'
import { login, logout } from '../auth'
import { requiresAdmin } from '../permissions'

const pubsub = new PubSub()
const NEW_USER_CHANNEL = 'NEW_USER_CHANNEL'
const DELETE_USER_CHANNEL = 'DELETE_USER_CHANNEL'

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
    getUsers: requiresAdmin.createResolver(async (parent, args, { models, user }) => {
      console.log('Inside resolvers:Query:getUsers')
      if (!user) {
        console.log('No userrrrrrrrrrr!!!!')
        return null
        // return {
        //   ok: false,
        //   errors: [{ message: 'You need to log in to access this view', path: '/gqlusers' }],
        // }
      }
      // console.log(`resolvers:Query:getUsers args: ${JSON.stringify(args)}`)
      const foundUsers = await models.User.find({ owner: args.owner })
      // const foundUsers = await models.User.find()
      // console.log(`resolvers:Query:getUsers:found users: ${foundUsers}`)
      return foundUsers
      // return {
      //   ok: true,
      //   owner: user.id,
      //   users: models.User.find({ owner: user.id }),
      // }
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
        console.log(`Mutation:registerUser: ${JSON.stringify(args)}`)
        const createdUser = await models.User.create({ ...args, owner: user })
        pubsub.publish(NEW_USER_CHANNEL, {
          owner: user.id,
          userAdded: createdUser,
          anotherArg: true,
        })
        return { ok: true, owner: user.id, user: createdUser }
      } catch (error) {
        return {
          ok: false,
          errors: formatErrors(error, models),
        }
      }
    },
    deleteUser: async (parent, { id }, { models }) => {
      await models.User.findByIdAndRemove(id, () => {
        console.log(`removed user with id: ${id}`)
        pubsub.publish(DELETE_USER_CHANNEL, {
          userDeleted: { id },
        })
      })

      return { ok: true, id }
    },
  },

  Subscription: {
    userAdded: {
      // resolve: (payload) => {
      //   console.log('Subscription:userAdded')
      //   console.log(payload, owner)
      // },
      // subscribe: () => pubsub.asyncIterator(NEW_USER_CHANNEL),
      subscribe: withFilter(
        () => pubsub.asyncIterator(NEW_USER_CHANNEL),
        (payload, args) => {
          console.log(`Subscription:subscribe:withFilter:payload: ${JSON.stringify(payload)}`)
          console.log(`Subscription:subscribe:withFilter:args: ${JSON.stringify(args)}`)
          return payload.owner === args.owner
          // return true
        }
        // (payload, variables, context, info) => {
        //   console.log('Subscription:subscribe:withFilter')
        //   console.log(`Subscription:subscribe:withFilter:payload: ${JSON.stringify(payload)}`)
        //   console.log(`Subscription:subscribe:withFilter:variables: ${JSON.stringify(variables)}`)
        //   console.log(`Subscription:subscribe:withFilter:context: ${JSON.stringify(context)}`)
        //   console.log(`Subscription:subscribe:withFilter:info: ${JSON.stringify(info)}`)
        //   console.log(payload.owner, variables.owner)
        //   console.log(payload.owner === variables.owner)
        //   return payload.owner === variables.owner
        //   // return payload.owner === payload.userAdded.owner
        //   // if (
        //   //   variables.owner &&
        //   //   _.isString(variables.owner) &&
        //   //   variables.owner !== '' &&
        //   //   payload.owner &&
        //   //   _.isString(payload.owner)
        //   // ) {
        //   //   console.log('MATCH!!!!!!!!!!!!!!!!!!!!!!!!!!')
        //   //   return payload.owner === variables.owner
        //   // }
        //   // return true
        // }
      ),
    },
    userDeleted: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(DELETE_USER_CHANNEL),
        (payload, args) => {
          console.log('userDeleted Subscription:::::')
          console.log(payload, args)
          return true
        }
      ),
    },
  },
}

export default resolvers
