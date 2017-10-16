import { fromJS } from 'immutable'
import { SELECTOR_COUNT, SELECTOR_COUNT_VALUE } from './containers/CounterContainer/constants'
import { SELECTOR_USERS, SELECTOR_USERS_USERS, SELECTOR_USERS_ERROR, SELECTOR_USERS_ISLOADING } from './containers/UserListContainer/constants'
import { SELECTOR_WEATHER, SELECTOR_WEATHER_ZIP } from './containers/WeatherContainer/constants'

export default fromJS({
  [SELECTOR_USERS]: {
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
    [SELECTOR_USERS_ERROR]: 'This is a global error',
    [SELECTOR_USERS_ISLOADING]: true,
  },
  [SELECTOR_COUNT]: {
    [SELECTOR_COUNT_VALUE]: 10,
  },
  [SELECTOR_WEATHER]: {
    [SELECTOR_WEATHER_ZIP]: '20165',
  },
})
