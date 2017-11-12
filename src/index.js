import 'regenerator-runtime/runtime'
import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import { render } from 'react-dom'

// Apollo client
import { ApolloProvider } from 'react-apollo'

// Redux
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { combineReducers } from 'redux-immutable'
import { reducer as form } from 'redux-form/immutable'
import createSagaMiddleware from 'redux-saga'
import { reducers } from './reducers'
import rootSaga from './sagas'
import client from './apolloClient'
import './index.css'
import AppRouter from './router'
// import vendor_lib from '../dist/vendor.bundle'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose //eslint-disable-line

const history = createHistory()

const rMiddleware = routerMiddleware(history)
const combinedReducers = combineReducers({
  ...reducers,
  router: routerReducer,
  form,
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
