import { createResolver } from 'apollo-resolvers'
import { createError, isInstance } from 'apollo-errors'
import {
  UnknownError,
  UnauthorizedError,
  AlreadyAuthenticatedError,
  ForbiddenError,
} from './errors'

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
  console.log(root)
  console.log(args)
  if (!user) {
    throw new UnauthorizedError({
      data: {
        path: 'asdasdasd',
      },
    })
  }
})

// const isNotAuthenticatedResolver = baseResolver.createResolver(
//   (root, args, context) => {
//     const { user } = context

//     if (user) throw new AlreadyAuthenticatedError()
//   }
// )

export const requiresAdmin = requiresAuth.createResolver((root, args, { user }) => {
  if (!user.isAdmin) throw new ForbiddenError()
})

// const createResolver = (resolver) => {
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

// export const requiresAuth = createResolver((parent, args, { user }) => {
//   if (!user || !user.id) {
//     throw new UnauthorizedError()
//   }
// })

// export const requiresAdmin = requiresAuth.createResolver((parent, args, context) => {
//   if (!context.user.isAdmin) {
//     throw new ForbiddenError()
//   }
// })
