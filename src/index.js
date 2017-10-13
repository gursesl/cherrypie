import 'regenerator-runtime/runtime'
import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { combineReducers } from 'redux-immutable'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import createSagaMiddleware from 'redux-saga'
import App from './components/App'; //eslint-disable-line
import { reducers } from './reducers';
import rootSaga from './sagas'
import './index.css'
import UserListContainer from './containers/UserListContainer'
import CounterContainer from './containers/CounterContainer'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //eslint-disable-line

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
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

ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/counter" component={CounterContainer} />
        <Route exact path="/users" component={UserListContainer} />
      </div>
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root')
);
