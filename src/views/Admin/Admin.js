import React, { PureComponent } from 'react';
import {
  withRouter,
  Route
} from 'react-router-dom';
import { animated } from 'react-spring/renderprops'
/* Mui */
import {
  Grid,
 } from '@material-ui/core';
 /* Redux & Actions */
 import { connect } from 'react-redux';
/* Custom Utils */
import SectionHeader from 'utils/Views/SectionHeader';
/* View Components */
import UserList from 'views/Admin/UserList'
import Permissions from 'views/Admin/Permissions'


class Admin extends PureComponent {
  render() {
    const { match, users } = this.props
    return (
      <div>
        <SectionHeader
          title="Administration"
          subtitle="Give users permissions"
        />
        <Route path={`${match.path}/users`} component={UserList} />
        {users.map((user, i) => (
          <Route key={i} path={`${match.path}/permissions/${user}`} component={Permissions} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.iam.user.data.map(x => x.userId)
  }
}

export default withRouter(connect(mapStateToProps)(Admin));
