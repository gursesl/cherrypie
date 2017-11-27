import localforage from 'localforage'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory' //eslint-disable-line
import { setContext } from 'apollo-link-context'
import getBaseUrl from './utils/baseUrl'

const httpLink = createHttpLink({
  uri: `${getBaseUrl()}/graphql`,
})

const saveToken = (key, value) => {
  localforage
    .setItem(key, value)
    .then(() => {})
    .catch(() => {})
}

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = await localforage.getItem('token')
  const refreshToken = await localforage.getItem('refreshToken')

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
      'x-token': token,
      'x-refresh-token': refreshToken,
    },
  }
})

const tokenAfterwareLink = new ApolloLink((operation, forward) =>
  forward(operation).map((response) => {
    const context = operation.getContext()
    const { headers } = context.response

    if (headers) {
      const token = headers.get('x-token')
      const refreshToken = headers.get('x-refresh-token')

      if (token) {
        saveToken('token', token)
      }

      if (refreshToken) {
        saveToken('refreshToken', refreshToken)
      }
    }
    return response
  }))

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors) {
//     graphQLErrors.map(({ message, locations, path }) =>
//       // eslint-disable-next-line
//       console.log(
//         `[GraphQL error]: Message: ${message},
// Location: ${JSON.stringify(locations)}, Path: ${path}`))
//   }

//   if (networkError) {
//     console.log(`[Network error]: ${networkError}`) //eslint-disable-line
//   }
// })

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    // eslint-disable-next-line
    // console.log(`[GraphQL error]: Operation: ${JSON.stringify(operation)}, Response: ${JSON.stringify(response)}`)
    graphQLErrors.map(({ message, locations, path }) =>
      // eslint-disable-next-line
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`))
  }

  if (networkError) console.log(`[Network error]: ${networkError}`) // eslint-disable-line
})

const link = ApolloLink.from([errorLink, tokenAfterwareLink, authLink, httpLink])
const cache = new InMemoryCache({ dataIdFromObject: o => o.id })
const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
  mutate: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
}

export default new ApolloClient({
  link,
  cache,
  defaultOptions,
  // ssrMode: true,
  // ssrForceFetchDelay: 100,
  // connectToDevTools: true,
  // queryDeduplication: true,
})
