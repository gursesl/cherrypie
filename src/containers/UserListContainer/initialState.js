import { fromJS } from 'immutable'
import { SELECTOR_USERS_USERS, SELECTOR_USERS_ERROR, SELECTOR_USERS_ISLOADING } from './constants'

const initialState = fromJS({
  [SELECTOR_USERS_USERS]: [
    {
      id: 95617189,
      firstName: 'Elfrieda',
      lastName: 'Frank',
      email: 'Ada20@hotmail.com',
    },
    {
      id: 95617188,
      firstName: 'Jim',
      lastName: 'Smith',
      email: 'jsmith@mail.com',
    },
  ],
  [SELECTOR_USERS_ERROR]: 'This is an error',
  [SELECTOR_USERS_ISLOADING]: true,
})

export default initialState
