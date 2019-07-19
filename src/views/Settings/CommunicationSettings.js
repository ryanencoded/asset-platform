import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
/* Material */
import {
  Grid,
  Button
 } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
/* Components */
import NotificationSettings from 'views/Settings/NotificationSettings';
import EmailSettings from 'views/Settings/EmailSettings';
import PhoneSettings from 'views/Settings/PhoneSettings';

class CommunicationSettings extends Component {
  render() {
    const { classes } = this.props
    return (
      <Grid container direction="column" className={classes.root}>
        <Grid item sm={12}>
          <NotificationSettings />
        </Grid>
        <Grid item sm={12}>
          <PhoneSettings />
        </Grid>
        <Grid item sm={12}>
          <EmailSettings />
        </Grid>
      </Grid>
    )
  }
}

const styles = theme => ({
  root: {
    padding: '1rem'
  }
})

export default withRouter(withStyles(styles)(CommunicationSettings));
