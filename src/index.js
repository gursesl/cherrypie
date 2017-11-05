import 'regenerator-runtime/runtime'
import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import { render } from 'react-dom'

// Apollo
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import { setContext } from 'apollo-link-context'

// Redux
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { combineReducers } from 'redux-immutable'
import { reducer as formReducer } from 'redux-form'
import createSagaMiddleware from 'redux-saga'
import { reducers } from './reducers'
import rootSaga from './sagas'
import getBaseUrl from './utils/baseUrl'
import './index.css'
import AppRouter from './router'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose //eslint-disable-line

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    },
  }
});

const httpLink = createHttpLink({
  uri: `${getBaseUrl()}/graphql`,
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  // use restore on the cache instead of initialState
  cache: new InMemoryCache(),
  ssrMode: true,
  ssrForceFetchDelay: 100,
  connectToDevTools: true,
  queryDeduplication: true,
})

const history = createHistory()

const rMiddleware = routerMiddleware(history)
const combinedReducers = combineReducers({
  ...reducers,
  router: routerReducer,
  form: formReducer,
})

const store = createStore(
  combinedReducers, /* preloadedState, */
  // composeEnhancers(applyMiddleware(client.middleware(), sagaMiddleware, rMiddleware))
  composeEnhancers(applyMiddleware(sagaMiddleware, rMiddleware))
)

sagaMiddleware.run(rootSaga)

render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </ApolloProvider>
  , document.getElementById('root')
)
