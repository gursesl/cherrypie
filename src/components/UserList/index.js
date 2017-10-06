import React, { Component } from 'react' //eslint-disable-line
import PropTypes from 'prop-types'

class UserList extends Component {

  constructor(props) {
    super(props)
  }

  renderList() {
    // console.log(this.props)
    return this.props.users.map((user) => {
      return (
        <li key={user.id}>{user.id}: {user.lastName}, {user.firstName} -> {user.email}</li>
      );
    });
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
      </div>
    )
  }
}

UserList.propTypes = {
  onFetchUsers: PropTypes.func,
  users: PropTypes.array
};


export default UserList
