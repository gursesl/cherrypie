import { fromJS } from 'immutable'

const initialState = fromJS({
  users: [
    {
      id: "95617189",
      firstName: "Elfrieda",
      lastName: "Frank",
      email: "Ada20@hotmail.com",
    },
    {
      id: "95617188",
      firstName: "Jim",
      lastName: "Smith",
      email: "jsmith@mail.com",
    },
  ],
  error: null,
  isLoading: false,
})

export default initialState
