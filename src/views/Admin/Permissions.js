import React, { PureComponent } from 'react';
import {
  withRouter
} from 'react-router-dom';
/* Mui */
import {
  Grid,
  Paper,
  Typography,
 } from '@material-ui/core';
 import { withStyles } from '@material-ui/core/styles';
 /* Redux */
 import { connect } from 'react-redux';
 /* Components */
 import Services from 'views/Admin/Snippets/Services'
 import Actions from 'views/Admin/Snippets/Actions'
 import Resources from 'views/Admin/Snippets/Resources'
 import UserPermissions from 'views/Admin/Snippets/UserPermissions'

 class Permissions extends PureComponent {
   render() {
    const { user, classes } = this.props
    return (
      <Paper elevation={2} >
        <Typography paragraph variant='body1'>Manage Permissions for {user.name}</Typography>
        <Grid item container justify='space-around'>
          <Grid item sm={6} md={3}><Services /></Grid>
          <Grid item sm={6}  md={3}><Actions /></Grid>
          <Grid item sm={12} md={9}><Resources /></Grid>
          <Grid item sm={12} md={9}><UserPermissions /></Grid>
        </Grid>
      </Paper>
    )
   }
 }

 const mapStateToProps = state => {
   return {
     user: state.iam.user.current
   }
 }


 export default withRouter(connect(mapStateToProps)(Permissions));
