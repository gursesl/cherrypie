import React, { Component } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { Card, Feed } from 'semantic-ui-react'
import WeatherSearchResultItem from '../WeatherSearchResultItem'

class WeatherSearchResultList extends Component {
  renderItems() {
    const items = this.props.results.toJS()
    if (items && items.list && items.list.length > 0) {
      return items.list.map(item => (
        <WeatherSearchResultItem
          name={items.name}
          lat={items.coord.lat}
          lon={items.coord.lon}
          city={item}
          key={item.dt}
        />
      ))
    }
    return (
      <p>No items</p>
    )
  }

  render() {
    return (
      <div>

        <Card fluid>
          <Card.Content>
            <Card.Header>
              Search Results: {this.props.results.toJS().name}
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed>
              {this.renderItems()}
            </Feed>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

WeatherSearchResultList.propTypes = {
  results: ImmutablePropTypes.map.isRequired, // eslint-disable-line
}

export default WeatherSearchResultList
