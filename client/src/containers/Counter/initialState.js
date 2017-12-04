import { fromJS } from 'immutable'
import { SELECTOR_COUNT_VALUE } from './constants'

const initialState = fromJS({
  [SELECTOR_COUNT_VALUE]: 0,
})

export default initialState
