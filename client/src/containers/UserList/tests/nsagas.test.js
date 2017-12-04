import { takeLatest, put } from 'redux-saga/effects'

const CHOOSE_COLOR = 'CHOOSE_COLOR'
const CHANGE_UI = 'CHANGE_UI'

const chooseColor = color => ({
  type: CHOOSE_COLOR,
  payload: {
    color,
  },
})

const changeUI = color => ({
  type: CHANGE_UI,
  payload: {
    color,
  },
})

function* changeColorSaga() {
  const action = yield takeLatest(CHOOSE_COLOR)
  yield put(changeUI(action.payload.color))
}

describe('Saga testing for fun', () => {
  const gen = changeColorSaga();

  it('should wait for users to choose a color', () => {
    const expectedValue = takeLatest(CHOOSE_COLOR)
    expect(gen.next().value).toEqual(expectedValue)
  })

  it('should dispatch an action to change the color', () => {
    const color = 'red'
    const expectedValue = put(changeUI(color))
    expect(gen.next(chooseColor(color)).value).toEqual(expectedValue)
  })

  it('should return when done', () => {
    expect(gen.next().done).toBe(true)
  })
})
