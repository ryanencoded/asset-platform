import React, { Component } from 'react';
import {
  withRouter,
  Link
} from 'react-router-dom';
/* Mui */
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
  Button,
  IconButton
 } from '@material-ui/core';
 /* Icons */
 import Edit from '@material-ui/icons/Create'
 /* Redux */
 import { connect } from 'react-redux';
 import { selectIAMUser } from 'data/actions/iam'
 import { fetchUsers, fetchSelectedPermissions } from 'data/actions/iam'
 /* Custom Utils */
 import TooltipIcon from 'utils/Views/TooltipIcon';

 class UserList extends Component {

   componentWillMount() {
     this.props.dispatch(fetchUsers())
   }

   handleClick = (user) =>  {
     this.props.dispatch(selectIAMUser(user));
     this.props.dispatch(fetchSelectedPermissions(user));
   }

   render() {
      const { match, users } = this.props
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Username</TableCell>
              <TableCell align="left">Id</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, i) =>
              <TableRow key={i}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.userId}</TableCell>
                <TableCell>
                  <IconButton onClick={() => this.handleClick(user)} component={Link} to={`/app/admin/permissions/${user.userId}`}>
                    <TooltipIcon icon={<Edit />} text='Manage Permissions' />
                  </IconButton>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    )
   }
 }

 const mapStateToProps = state => {
   return {
     users: state.iam.user.data
   }
 }

 export default withRouter(connect(mapStateToProps)(UserList));
