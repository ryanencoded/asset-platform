import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { animated } from 'react-spring/renderprops'
/* MATERIAL */
import {
  Grid,
  Paper
 } from '@material-ui/core';
 import { withStyles } from '@material-ui/core/styles';
/* COMPONENTS */
import SectionHeader from 'utils/Views/SectionHeader';
import ProfileSettings from 'views/Profile/ProfileSettings';
import CommunicationSettings from 'views/Settings/CommunicationSettings';

class Settings extends Component {
  render() {
    const { classes, style } = this.props;
    return (
      <animated.div style={{ ...style }}>
        <SectionHeader
          title="Settings"
          subtitle="Edit your profile information and alert preferences."
        />

      <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item sm={12} md={6}>
              <ProfileSettings />
            </Grid>
            <Grid item sm={12} md={6} className={classes.communicationBox}>
              <CommunicationSettings />
            </Grid>
          </Grid>
        </Paper>

      </animated.div>
    )
  }
}

const styles = theme => ({
  communicationBox: {
    borderLeft: '1px solid #d8d8d8'
  }
});

export default withRouter(withStyles(styles)(Settings));
