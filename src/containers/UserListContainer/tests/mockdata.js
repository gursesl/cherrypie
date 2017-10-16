import { fromJS } from 'immutable'

export const mockUsers = fromJS([
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
])

export const mockError = fromJS({ type: 1, message: 'An error occurred.' })
