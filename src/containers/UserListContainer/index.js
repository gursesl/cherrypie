import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as a from './actions'
import UserList from '../../components/UserList' // eslint-disable-line no-unused-vars


class UserListContainer extends Component {
  render() {
    return (
      <UserList {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  // console.log("Inside mapStateToProps state:", state.toJS().users.users)
  return {
    users: state.toJS().users.users
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
