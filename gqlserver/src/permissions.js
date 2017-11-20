import { createResolver } from 'apollo-resolvers'
import { isInstance } from 'apollo-errors'
import {
  UnknownError,
  UnauthorizedError,
  AlreadyAuthenticatedError,
  ForbiddenError,
} from './errors'
import * as c from './constants'

const baseResolver = createResolver(null, (root, args, context, err) => {
  if (isInstance(err)) {
    return err
  }
  return new UnknownError({
    data: {
      name: err.name,
    },
  })
})

export const requiresAuth = baseResolver.createResolver((root, args, { user }) => {
  if (!user) {
    throw new UnauthorizedError({
      data: {
        path: '/login',
      },
    })
  }
})

export const isNotAuthenticatedResolver = baseResolver.createResolver((root, args, { user }) => {
  if (user) throw new AlreadyAuthenticatedError()
})

export const requiresAdmin = requiresAuth.createResolver((root, args, { user }) => {
  if (!user.isAdmin) {
    throw new ForbiddenError({
      data: {
        path: '/login',
      },
    })
  }
})

export const requiresProvider = requiresAuth.createResolver((root, args, { user }) => {
  if (!user.userType === c.USER_TYPE_PROVIDER) {
    throw new ForbiddenError({
      data: {
        path: '/login',
        message: 'You need to be a provider to access this view',
      },
    })
  }
})

export const requiresCaregiver = requiresAuth.createResolver((root, args, { user }) => {
  if (!user.userType === c.USER_TYPE_CAREGIVER) {
    throw new ForbiddenError({
      data: {
        path: '/login',
        message: 'You need to be a provider to access this view',
      },
    })
  }
})

// const rootResolver = (resolver) => {
//   const baseResolver = resolver
//   baseResolver.createResolver = (childResolver) => {
//     const newResolver = async (parent, args, context, info) => {
//       await resolver(parent, args, context, info)
//       return childResolver(parent, args, context, info)
//     }
//     return createResolver(newResolver)
//   }
//   return baseResolver
// }

// export const requiresAuth = rootResolver((parent, args, { user }) => {
//   if (!user || !user.id) {
//     throw new UnauthorizedError()
//   }
// })

// export const requiresAdmin = requiresAuth.createResolver((parent, args, { user }) => {
//   if (!user.isAdmin) {
//     throw new ForbiddenError()
//   }
// })
