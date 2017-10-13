import { createSelector } from 'reselect'
import { SELECTOR_COUNT, SELECTOR_COUNT_VALUE } from './constants'

// Direct selector to state domain
const selectCounter = state => state.get(SELECTOR_COUNT)

// Select the counter value
const makeSelectValue = () => createSelector(
  selectCounter,
  counterState => counterState.get(SELECTOR_COUNT_VALUE)
)

export {
  selectCounter,
  makeSelectValue,
}
