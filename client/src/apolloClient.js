import localforage from 'localforage'
import { ApolloClient } from 'apollo-client'
import { ApolloLink, split } from 'apollo-link'
// import WebSocket from 'ws'
// import { getOperationAST } from 'graphql'
import { getMainDefinition } from 'apollo-utilities' // eslint-disable-line
import { onError } from 'apollo-link-error'
import { createHttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { InMemoryCache } from 'apollo-cache-inmemory' //eslint-disable-line
import { setContext } from 'apollo-link-context'
import getBaseUrl from './baseUrl'

const httpLink = createHttpLink({
  uri: `${getBaseUrl()}/graphql`,
})

const saveToken = (key, value) => {
  localforage
    .setItem(key, value)
    .then(() => {})
    .catch(() => {})
}

let token
let refreshToken

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  token = await localforage.getItem('token')
  refreshToken = await localforage.getItem('refreshToken')

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
      const htoken = headers.get('x-token')
      const hrefreshToken = headers.get('x-refresh-token')

      if (htoken) {
        saveToken('token', htoken)
      }

      if (hrefreshToken) {
        saveToken('refreshToken', hrefreshToken)
      }
    }
    return response
  }))


// Object.assign(global, {
//   WebSocket: WebSocket,
// });

const wsLink = new WebSocketLink({
  uri:
    process.env.NODE_ENV !== 'production'
      ? 'ws://localhost:5000/subscriptions'
      : 'wss://cherrypieapp.herokuapp.com/subscriptions',
  // webSocketImpl: WebSocket,
  options: {
    reconnect: true,
    connectionParams: {
      authToken: token,
    },
  },
})

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

const httpLinkWithMiddleware = ApolloLink.from([errorLink, tokenAfterwareLink, authLink, httpLink])

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
// With AST
// const link = split(
//   // split based on operation type
//   (operation) => {
//     const operationAST = getOperationAST(operation.query, operation.operationName)
//     return !!operationAST && operationAST.operation === 'subscription'
//   },
//   // ({ query }) => {
//   //   const { kind, operation } = getMainDefinition(query)
//   //   return kind === 'OperationDefinition' && operation === 'subscription'
//   // },
//   wsLink,
//   httpLinkWithMiddleware
// )

// With getMainDefinition
const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLinkWithMiddleware
)

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
  ssrMode: true,
  // ssrForceFetchDelay: 100,
  // connectToDevTools: true,
  queryDeduplication: true,
})
