import 'regenerator-runtime/runtime'
import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import { render } from 'react-dom'
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { combineReducers } from 'redux-immutable'
import createSagaMiddleware from 'redux-saga'
import { reducers } from './reducers';
import rootSaga from './sagas'
import './index.css'
import AppRouter from './router'

// Apollo network interface
const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4000/graphql',
})

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //eslint-disable-line

const client = new ApolloClient({
  networkInterface,
  reduxRootSelector: state => state.get('apollo'), // apollo reducer key
})

const history = createHistory()

const rMiddleware = routerMiddleware(history)
const combinedReducers = combineReducers({
  ...reducers,
  router: routerReducer,
  apollo: client.reducer(),
})

const store = createStore(
  combinedReducers, /* preloadedState, */
  composeEnhancers(applyMiddleware(client.middleware(), sagaMiddleware, rMiddleware))
)

sagaMiddleware.run(rootSaga)

render(
  <ApolloProvider store={store} client={client}>
    <AppRouter />
  </ApolloProvider>
  , document.getElementById('root')
);
