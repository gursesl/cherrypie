import { createSelector } from 'reselect'
import { SELECTOR_USERS, SELECTOR_USERS_USERS, SELECTOR_USERS_ERROR, SELECTOR_USERS_ISLOADING } from './constants'

// Direct selector to state domain
const selectUsers = state => state.get(SELECTOR_USERS)

// Select users
const makeSelectUsers = () => createSelector(
  selectUsers,
  users => users.get(SELECTOR_USERS_USERS),
)

// Select error
const makeSelectError = () => createSelector(
  selectUsers,
  errorState => errorState.get(SELECTOR_USERS_ERROR),
)

// Select error
const makeSelectIsLoading = () => createSelector(
  selectUsers,
  isLoading => isLoading.get(SELECTOR_USERS_ISLOADING),
)

export {
  selectUsers,
  makeSelectUsers,
  makeSelectError,
  makeSelectIsLoading,
}
