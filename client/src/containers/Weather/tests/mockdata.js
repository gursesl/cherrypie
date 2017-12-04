import { fromJS } from 'immutable'
import {
  SELECTOR_WEATHER,
  SELECTOR_WEATHER_ZIP,
  SELECTOR_WEATHER_CITY,
  SELECTOR_WEATHER_RESULTS,
  SELECTOR_WEATHER_ERROR,
} from '../constants'

export const subState = fromJS({
  [SELECTOR_WEATHER_ZIP]: '20165',
  [SELECTOR_WEATHER_CITY]: 'Sterling',
  [SELECTOR_WEATHER_RESULTS]: {},
  [SELECTOR_WEATHER_ERROR]: 'Load error',
});

export const mockedState = fromJS({
  [SELECTOR_WEATHER]: subState,
});

export const mockData = fromJS({
  cod: '200',
  message: 0.004,
  cnt: 38,
  list: [
    {
      dt: 1508306400,
      main: {
        temp: 276.23,
        temp_min: 276.23,
        temp_max: 277.899,
        pressure: 1027.23,
        sea_level: 1040.82,
        grnd_level: 1027.23,
        humidity: 73,
        temp_kf: -1.67,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 205.503,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2017-10-18 06:00:00',
    },
  ],
  city: {
    id: 4754219,
    name: 'Countryside',
    coord: {
      lat: 39.0409,
      lon: -77.4136,
    },
    country: 'US',
  },
})

export const processedMockData = fromJS({
  id: 4754219,
  name: 'Countryside',
  coord: {
    lat: 39.0409,
    lon: -77.4136,
  },
  country: 'US',
  list: [
    {
      dt: 1508306400,
      temp: (276.23 - 273.15).toFixed(2),
      pressure: 1027.23,
      humidity: 73,
      temp_min: (276.23 - 273.15).toFixed(2),
      temp_max: (277.899 - 273.15).toFixed(2),
      wind: 205.503,
      clouds: 0,
      description: 'clear sky',
      icon: 'https://openweathermap.org/img/w/01n.png',
    },
  ],
})

export const mockError = fromJS({ type: 1, message: 'An error occurred.' });
