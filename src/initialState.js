import { fromJS } from 'immutable'
import { SELECTOR_COUNT, SELECTOR_COUNT_VALUE } from './containers/CounterContainer/constants'
import { SELECTOR_USERS, SELECTOR_USERS_USERS, SELECTOR_USERS_ERROR, SELECTOR_USERS_ISLOADING } from './containers/UserListContainer/constants'

export default fromJS({
  [SELECTOR_USERS]: {
    [SELECTOR_USERS_USERS]: [
      {
        id: '95617189',
        firstName: 'Elfrieda',
        lastName: 'Frank',
        email: 'Ada20@hotmail.com',
      },
      {
        id: '95617188',
        firstName: 'Jim',
        lastName: 'Smith',
        email: 'jsmith@mail.com',
      },
    ],
    [SELECTOR_USERS_ERROR]: null,
    [SELECTOR_USERS_ISLOADING]: true,
  },
  [SELECTOR_COUNT]: {
    [SELECTOR_COUNT_VALUE]: 10,
  },
})
