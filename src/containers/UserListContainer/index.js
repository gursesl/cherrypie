import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createSelector } from 'reselect'
import * as a from './actions'
import { makeSelectUsers, makeSelectError, makeSelectIsLoading } from './selectors'
import UserList from '../../components/UserList' // eslint-disable-line no-unused-vars


class UserListContainer extends Component {
  render() {
    return (
      <UserList {...this.props} />
    );
  }
}

const mapStateToProps = createSelector(
  [makeSelectUsers(), makeSelectError(), makeSelectIsLoading()],
  (users, error, isLoading) => ({
    users: users.toJS(),
    error: error,
    isLoading: isLoading,
  })
)

// const mapStateToProps = () => {
//   return {
//     users: makeSelectUsers(),
//   }
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onFetchUsers: a.usersFetchStart,
    onFetchUsersSuccess: a.usersFetchSuccess,
    onFetchUsersFailure: a.usersFetchFailure,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
