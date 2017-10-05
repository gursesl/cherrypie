import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as a from './actions'
import UserList from '../../components/UserList' // eslint-disable-line no-unused-vars


class UserListContainer extends Component {
  usersFetchStart() {
    a.usersFetchStart()
  }

  render() {
    return (
      <UserList {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  const users = state.get('users').toJS().users
  return {
    users
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onFetchUsers: a.usersFetchStart,
    onFetchUsersSuccess: a.usersFetchSuccess,
    onFetchUsersFailure: a.usersFetchFailure
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
