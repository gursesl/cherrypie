import 'regenerator-runtime/runtime'
import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
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
const history = createHistory()
const rMiddleware = routerMiddleware(history)
const combinedReducers = combineReducers({
  ...reducers,
  router: routerReducer,
})

const store = createStore(
  combinedReducers, /* preloadedState, */
  composeEnhancers(applyMiddleware(sagaMiddleware, rMiddleware))
)

sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
  , document.getElementById('root')
);
