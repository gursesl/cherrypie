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
  message: 'accurate',
  cod: '200',
  count: 3,
  list: [
    {
      id: 4754219,
      name: 'Countryside',
      coord: { lat: 39.0409, lon: -77.4136 },
      main: {
        temp: 288.82,
        pressure: 1026,
        humidity: 36,
        temp_min: 287.15,
        temp_max: 290.15,
      },
      dt: 1508277900,
      wind: { speed: 1.91, deg: 319.002 },
      sys: { country: 'US' },
      rain: null,
      snow: null,
      clouds: { all: 1 },
      weather: [
        {
          id: 800, main: 'Clear', description: 'sky is clear', icon: '01d',
        },
      ],
    },
    {
      id: 4888906,
      name: 'Countryside',
      coord: { lat: 41.7828, lon: -87.8782 },
      main: {
        temp: 293.82,
        pressure: 1021,
        humidity: 37,
        temp_min: 293.15,
        temp_max: 294.15,
      },
      dt: 1508278500,
      wind: { speed: 2.6, deg: 220, gust: 4.1 },
      sys: { country: 'US' },
      rain: null,
      snow: null,
      clouds: { all: 1 },
      weather: [
        {
          id: 800, main: 'Clear', description: 'sky is clear', icon: '01d',
        },
      ],
    },
    {
      id: 7150586,
      name: 'Countryside',
      coord: { lat: 39.8858, lon: -105.1195 },
      main: {
        temp: 297.81,
        pressure: 1021,
        humidity: 7,
        temp_min: 296.15,
        temp_max: 300.15,
      },
      dt: 1508277480,
      wind: { speed: 2.6, deg: 210 },
      sys: { country: 'US' },
      rain: null,
      snow: null,
      clouds: { all: 1 },
      weather: [
        {
          id: 800, main: 'Clear', description: 'sky is clear', icon: '01d',
        },
      ],
    },
  ],
});

export const processedMockData = [
  {
    id: 4754219,
    name: 'Countryside',
    country: 'US',
    coord: { lat: 39.0409, lon: -77.4136 },
    temp: '15.67',
    pressure: 1026,
    humidity: 36,
    temp_min: '14.00',
    temp_max: '17.00',
    wind: 1.91,
    clouds: 1,
    description: 'sky is clear',
    icon: 'http://openweathermap.org/img/w/01d.png',
  },
  {
    id: 4888906,
    name: 'Countryside',
    country: 'US',
    coord: { lat: 41.7828, lon: -87.8782 },
    temp: '20.67',
    pressure: 1021,
    humidity: 37,
    temp_min: '20.00',
    temp_max: '21.00',
    wind: 2.6,
    clouds: 1,
    description: 'sky is clear',
    icon: 'http://openweathermap.org/img/w/01d.png',
  },
  {
    id: 7150586,
    name: 'Countryside',
    country: 'US',
    coord: { lat: 39.8858, lon: -105.1195 },
    temp: '24.66',
    pressure: 1021,
    humidity: 7,
    temp_min: '23.00',
    temp_max: '27.00',
    wind: 2.6,
    clouds: 1,
    description: 'sky is clear',
    icon: 'http://openweathermap.org/img/w/01d.png',
  },
]

export const mockError = fromJS({ type: 1, message: 'An error occurred.' });
