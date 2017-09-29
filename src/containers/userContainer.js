import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';

class UserList extends Component {
  renderList() {
    return this.props.users.map((user) => {
      return (
        <li key={user.id}>{user.username}</li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    asdf: 123,
    users: state.users
  };
}

export default connect(mapStateToProps)(UserList);
