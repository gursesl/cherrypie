import localforage from 'localforage'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import getBaseUrl from './utils/baseUrl'

const httpLink = createHttpLink({
  uri: `${getBaseUrl()}/graphql`,
})

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

export default new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  ssrMode: true,
  ssrForceFetchDelay: 100,
  connectToDevTools: true,
  queryDeduplication: true,
})
