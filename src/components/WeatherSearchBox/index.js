import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Segment,
  Form,
  Button,
} from 'semantic-ui-react'

class WeatherSearchBox extends Component {
  constructor(props) {
    super(props)
    this.state = { search: props.city || props.zip }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ search: event.target.value })
  }

  handleSubmit() {
    this.props.onSubmit(this.state.search)
    // event.preventDefault()
  }

  render() {
    return (
      <div>
        <Segment
          textAlign="center"
          style={{ padding: '5em 0em', background: '#ff8114' }}
        >
          <Form onSubmit={this.handleSubmit}>
            <Form.Field inline>
              <input
                placeholder="City or ZIP"
                value={this.state.search}
                onChange={this.handleChange}
              />
              <Button type="submit">Search</Button>
            </Form.Field>
          </Form>
        </Segment>
      </div>
    )
  }
}

WeatherSearchBox.propTypes = {
  zip: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default WeatherSearchBox
