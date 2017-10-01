import { delay } from 'redux-saga'
import { put, takeEvery, all, call } from 'redux-saga/effects'
import { INCREMENT_ACTION, INCREMENT_ACTION_ASYNC} from './containers/CounterContainer/constants'

export function* helloSaga() {
    yield console.log('Hello Sagas!') //eslint-disable-line
}

export function* incrementAsync() {
    yield call(delay, 1000)
    yield put({ type: INCREMENT_ACTION })
}

export function* watchIncrementAsync() {
    yield takeEvery(INCREMENT_ACTION_ASYNC, incrementAsync)
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}
