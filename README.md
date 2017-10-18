[![Build Status](https://travis-ci.org/gursesl/cherrypie.svg?branch=master)](https://travis-ci.org/gursesl/cherrypie) [![Coverage Status](https://coveralls.io/repos/github/gursesl/cherrypie/badge.svg)](https://coveralls.io/github/gursesl/cherrypie) [![Greenkeeper badge](https://badges.greenkeeper.io/gursesl/cherrypie.svg)](https://greenkeeper.io/) [![Known Vulnerabilities](https://snyk.io/test/github/gursesl/cherrypie/badge.svg)](https://snyk.io/test/github/gursesl/cherrypie)

# Live links

- Surge (Static front-end): http://cherrypie.surge.sh
- Heroku (API and front-end): https://cherrypieapp.herokuapp.com

# Cherry Pie
This is a repository with code for cherry pie making recipes

Heroku Setup
==
- heroku login
- heroku git:remote -a cherrypieapp
- git push heroku master

TravisCI Setup
==
- Environment vars for Surge, Heroku
- Build stages in YAML file

Tech Todo
==
- [x] Add Redux
  - [x] Test Redux
  - [x] Add actions and action creators
  - [x] Solidify reducers
- [x] React router
  - [x] Test react router
- [ ] Styled components
  - [ ] Test styled components
- [ ] Apollo server
  - [ ] Apollo mock server
  - [ ] Test Apollo server
- [ ] Apollo client
  - [ ] Test Apollo client
  - [ ] Solidify central api calling script
- [x] Add Proptypes
  - [x] Test Proptypes
  - [x] Refactor client/server scrips
- [x] Add Redux Sagas
  - [x] Test sagas
- [x] Reselect for Redux
  - [x] Test restate
- [x] Container/component template w/ Redux
- [ ] React Forms
  - Test forms
- [ ] Semantic UI main App layout component
  - [ ] Test Semantic UI layout component


Functional Todo
==
- [ ] [Create a weather route/container/component](./docs/weather.md)
- [ ] User sign-up
  - [ ] Test user sign-up
- [ ] User sign-in
  - [ ] Test user sign-in
- [ ] User sign-out
  - [ ] Test user sign-out
- [ ] Sign-up with Google
  - [ ] Test user sign-up
- [ ] Sign-up with Facebook
  - [ ] Test user sign-up
- [ ] Sign-up with Twitter
  - [ ] Test user sign-up
