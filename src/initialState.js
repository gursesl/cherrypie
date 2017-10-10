import { fromJS } from 'immutable'

export default fromJS({
  usersContainer: {
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
    isLoading: true,
  },
  counterContainer: {
    value: 10,
  },
})
