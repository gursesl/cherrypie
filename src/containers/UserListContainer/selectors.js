import { createSelector } from 'reselect'
import { SELECTOR_USERS, SELECTOR_USERS_USERS, SELECTOR_USERS_ERROR, SELECTOR_USERS_ISLOADING } from './constants'

// Direct selector to state domain
const selectUsers = (state) => state.get(SELECTOR_USERS)

// Select users
const makeSelectUsers = () => createSelector(
  selectUsers,
  (users) => users.get(SELECTOR_USERS_USERS),
  // (errorState) => errorState.get(SELECTOR_USERS_ERROR),
  // (loadingState) => loadingState.get(SELECTOR_USERS_ISLOADING),
)

// Select error
const makeSelectError = () => createSelector(
  selectUsers,
  // (error) => users.get(SELECTOR_USERS_USERS),
  (errorState) => errorState.get(SELECTOR_USERS_ERROR),
  // (loadingState) => loadingState.get(SELECTOR_USERS_ISLOADING),
)

// Select error
const makeSelectIsLoading = () => createSelector(
  selectUsers,
  // (error) => users.get(SELECTOR_USERS_USERS),
  // (errorState) => errorState.get(SELECTOR_USERS_ERROR),
  (isLoading) => isLoading.get(SELECTOR_USERS_ISLOADING),
)

export {
  selectUsers,
  makeSelectUsers,
  makeSelectError,
  makeSelectIsLoading,
}
