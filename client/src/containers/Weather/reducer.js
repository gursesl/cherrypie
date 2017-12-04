import { fromJS } from 'immutable'
import initialState from './initialState'
import * as g from './geoUtils'
import * as c from './constants'

export function processResultData(data) {
  if (data && data.list) {
    const items = data.list.map(city =>
      // eslint-disable-line
      ({
        dt: city.dt,
        temp: (city.main.temp - 273.15).toFixed(2),
        pressure: city.main.pressure,
        humidity: city.main.humidity,
        temp_min: (city.main.temp_min - 273.15).toFixed(2),
        temp_max: (city.main.temp_max - 273.15).toFixed(2),
        wind: city.wind.speed,
        clouds: city.clouds.all,
        description: city.weather[0].description,
        icon: `https://openweathermap.org/img/w/${city.weather[0].icon}.png`,
      }))

    return fromJS({
      id: data.city.id,
      name: data.city.name,
      coord: data.city.coord,
      country: data.city.country,
      list: items,
    })
  }
  return fromJS({})
}

function weatherContainerReducer(state = initialState, action) {
  switch (action.type) {
    case c.WEATHER_DATA_FETCH_START:
      if (action.payload && g.matchZipCode(action.payload)) {
        return state.set(c.SELECTOR_WEATHER_ZIP, action.payload)
      } else if (action.payload) {
        return state.set(c.SELECTOR_WEATHER_CITY, action.payload)
      }
      return state
    case c.WEATHER_DATA_FETCH_SUCCESS:
      if (action.payload) {
        return state.set(c.SELECTOR_WEATHER_RESULTS, processResultData(action.payload))
      }
      return state
    case c.WEATHER_DATA_FETCH_FAILURE:
      return state.set(c.SELECTOR_WEATHER_ERROR, fromJS(action.error) || '')
    default:
      return state
  }
}

export default weatherContainerReducer
