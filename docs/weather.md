# Weather component
## Current weather data By ZIP code

- API - api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}

## General
- [x] Env package for API key
- [x] Refactor routers to use React Router DOM
- [x] Move routes to a separate file
- [x] Refactor App component
  - [x] Integrate React Router with Redux
  - [x] Extract header navigation
  - [x] Nested routes
- [ ] Heroku env variable for API key

## Weather component
- [x] New route test
  - [x] New route
- [ ] Selectors test
  - [ ] Selectors
- [ ] Reducer test
  - [ ] Reducer
- [ ] Actions test
  - [ ] Actions
- [ ] Sagas test
  - [ ] Sagas
- [ ] Container test
  - [ ] Container
- [ ] Component test
  - [ ] Component

## Plan of action
- [ ] Create first component similar to https://openweathermap.org/find?q=20165
- [x] Design container/component - https://mockflow.com/app/#Wireframe
![alt text](./images/weather-comp-mockup.jpg "Weather component mockup")
- [ ] Write container tests
- [ ] Create container code
- [ ] Write component tests
- [ ] Create components
- Design state
  - zip
  - city
  - results
    - city_name
    - temp
    - icon_url
    - desc_short
    - desc_long
    - geo_coord
  - error
- Selector test
- Selector
