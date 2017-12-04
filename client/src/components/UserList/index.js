import React, { Component } from 'react' //eslint-disable-line
import PropTypes from 'prop-types'

class UserList extends Component {
  renderList() {
    // console.log(this.props)
    return this.props.users.map(user => (
      <li key={user.id}>
        {user.id}: {user.lastName}, {user.firstName} = {user.email}
      </li>))
  }

  render() {
    // console.log(this.props.users)
    return (
      <div>
        <h1>User List Component</h1>
        <ul>
          {this.renderList()}
        </ul>
        <button onClick={this.props.onFetchUsers}>Fetch Users</button>
        <hr />
        <h4>Error:{this.props.error}</h4>
        <h4>Loading:{this.props.isLoading.toString()}</h4>
      </div>
    )
  }
}

UserList.propTypes = {
  onFetchUsers: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    emailName: PropTypes.string,
  })).isRequired,
  error: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
}


export default UserList
