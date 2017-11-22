# User Authentication

## Task list

- [x] Redux Form
  - [x] Install Redux Form
  - [x] Apollo client setup
  - [ ] Reset store on logout - https://www.apollographql.com/docs/react/recipes/authentication.html

- [x] MongoDB
  - [x] Mongoose
  - [ ] PassportJS
  - [ ] Express session - https://github.com/graphql/express-graphql
  - [x] Local setup
  - [x] mLabs setup, env key for Heroku

- [x] Graphql Server
  - [x] Combine servers - regular + graphql
  - [x] Define user schema
  - [x] Define user query + mutations
  - [x] Define user resolvers

- [ ] Test login modal
  - [ ] Login modal
- [ ] Test logout modal
  - [ ] Logout modal

- [x] User sign-up
  - [x] Sign-up menu item
  - [x] Sign-up modal
  - [x] Sign-up form
    - [x] Success message modal
    - [x] Client error handling
    - [x] Server error handling
    - [x] Form validations
      - [x] Client-side validation
      - [x] Server validation
        - [x] Unique email address
  - [x] Apollo mutatation
  - [x] Apollo resolver
  - [x] MongoDB collection
  - [x] Test user sign-up
  - [ ] Login user after successful registration

- [ ] User login
  - [x] Login menu item
  - [x] Login modal
  - [x] Login form
    - [x] Success message modal
    - [x] Client error handling
    - [x] Server error handling
    - [x] Form validations
      - [x] Client-side validation
      - [x] Server validation
    - [ ] Redux
      - [ ] Selectors
      - [ ] Actions
      - [ ] Reducers
      - [ ] Sagas
  - [ ] Menu update
    - [ ] Profile name, thumb pic - https://react.semantic-ui.com/modules/dropdown
    - [ ] Profile dropdown
    - [ ] Show/hide buttons/manu options based on user's auth state in the Redux store
  - [x] Apollo mutatation
  - [x] Apollo resolver
  - [x] Test user login
  - [ ] Redirect user

- [ ] User logout
  - [x] Logout menu item
  - [x] Logout modal
  - [x] Logout form
    - [ ] Success message modal
    - [ ] Client error handling
    - [ ] Server error handling
    - [ ] Form validations
      - [ ] Client-side validation
      - [ ] Server validation
        - [ ] Unique email address
  - [ ] Apollo mutatation
  - [ ] Apollo resolver
  - [ ] Test user logout
  - [ ] Redirect user

- [ ] Forgot password
  - [x] Forgot password modal
  - [x] Forgot password form
    - [ ] Success message modal
    - [ ] Client error handling
    - [ ] Server error handling
    - [ ] Form validations
      - [ ] Client-side validation
      - [ ] Server validation
        - [ ] Unique email address
  - [ ] Apollo mutatation
  - [ ] Apollo resolver
  - [ ] Test forgot password
  - [ ] Redirect user

- [ ] Show/Hide buttons based on user auth status

- [ ] Protected routes - React Router
  - [ ] Redirect user (Optional?)
  - [ ] Login separate route
  - [ ] Register separate route
  - [ ] HOC for protected routes
  - [ ] Users - /users
  - [ ] GraphQL users - /gqlusers
  - [ ] Role-based routing
    - [ ] Caregiver
    - [ ] User

- [ ] Protected routes - GraphQL server
  - [x] HOC with chaining for protected routes
  - [x] Throw error with path if user not authenticated or belonging to a role
  - [ ] Handle error on client and redirect to /login with proper path

- [ ] OAuth
  - [ ] Sign-up with Google
    - [ ] Test user sign-up
  - [ ] Sign-up with Facebook
    - [ ] Test user sign-up
  - [ ] Sign-up with Twitter
    - [ ] Test user sign-up
