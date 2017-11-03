import 'regenerator-runtime/runtime'
import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import { render } from 'react-dom'

// Apollo
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { combineReducers } from 'redux-immutable'
import createSagaMiddleware from 'redux-saga'
import { reducers } from './reducers';
import rootSaga from './sagas'
import './index.css'
import AppRouter from './router'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //eslint-disable-line

const link = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'same-origin',
})

const client = new ApolloClient({
  link,
  // use restore on the cache instead of initialState
  cache: new InMemoryCache(),
  ssrMode: true,
  ssrForceFetchDelay: 100,
  connectToDevTools: true,
  queryDeduplication: true,
});

const history = createHistory()

const rMiddleware = routerMiddleware(history)
const combinedReducers = combineReducers({
  ...reducers,
  router: routerReducer,
  // apollo: client.reducer(),
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
);
