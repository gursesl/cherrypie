import { fromJS } from 'immutable'

// Redux
import { createStore, applyMiddleware, compose } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import { combineReducers } from 'redux-immutable'
import { reducer as form } from 'redux-form/immutable'
import createHistory from 'history/createBrowserHistory'
import { reducers } from './reducers'
import rootSaga from './sagas'

export const history = createHistory()
const sagaMiddleware = createSagaMiddleware()
const rMiddleware = routerMiddleware(history)

const initialState = fromJS({})
const enhancers = []

const middleware = [sagaMiddleware, rMiddleware]

if (process.env.NODE_ENV === 'development') {
  const { devToolsExtension } = window

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

const rootReducer = combineReducers({
  ...reducers,
  router: routerReducer,
  form,
})

const store = createStore(rootReducer, initialState, composedEnhancers)
sagaMiddleware.run(rootSaga)

export default store
