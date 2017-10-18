import React from 'react'
import PropTypes from 'prop-types'
import {
  Feed,
  Flag,
  Label,
} from 'semantic-ui-react'

const WeatherSearchResultItem = props => (
  <Feed.Event>
    <Feed.Label image={props.city.icon} />
    <Feed.Content>
      <Feed style={{ color: '#ff8114' }}>
        <strong>{props.name}, US </strong>
        <Flag name="us" />
        <strong style={{ color: '#000' }}>{props.city.description}, US</strong>
      </Feed>
      <Feed.Extra text>
        <Label>{props.city.temp} &#8451;</Label>
          From {props.city.temp_min} &#8451; to {props.city.temp_max} &#8451;,
          wind {props.city.wind} m/s, clouds {props.city.clouds}%, {props.city.pressure} hpa
          <br />
          Geo coordinates
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://openweathermap.org/weathermap?zoom=12&lat=${props.lat}&lon=${props.lon}`}
          >
          &nbsp;[{props.lat}, {props.lon}]
          </a>
      </Feed.Extra>
    </Feed.Content>
  </Feed.Event>
)

WeatherSearchResultItem.propTypes = {
  name: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired,
  city: PropTypes.shape({
    // id: PropTypes.number.isRequired,
    name: PropTypes.string,
    // country: PropTypes.string,
    coord: PropTypes.shape({
      lat: PropTypes.number,
      lon: PropTypes.number,
    }),
    temp: PropTypes.string,
    pressure: PropTypes.number,
    // humidity: PropTypes.number,
    temp_min: PropTypes.string,
    temp_max: PropTypes.string,
    wind: PropTypes.number,
    clouds: PropTypes.number,
    description: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
}

export default WeatherSearchResultItem
