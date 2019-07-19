import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
/* Animation */
import { animated } from 'react-spring/renderprops'
/* Mui */
import {
  Grid
} from '@material-ui/core';
/* Custom Utils */
import SectionHeader from 'utils/Views/SectionHeader'
/* View Snippets  */
import AlertList from 'views/Alerts/AlertList';
import Sort from 'utils/Views/Sort';
import Filter from 'utils/Views/Filter'

class Alerts extends Component {
  render() {
    const { style } = this.props;
    return (
      <animated.div style={{ ...style }}>
        <Grid container justify="space-between" spacing={2}>
          <Grid item xs={12} sm={3}>
            <SectionHeader
              title="Alerts"
              subtitle="See all your alerts across all your assets"
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Sort service='alert'/>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Filter service='alert'/>
          </Grid>
        </Grid>

        <Grid container display="flex" direction="column">
            <Grid item sm={12}>
              <AlertList />
            </Grid>
        </Grid>
      </animated.div>
    )
  }
}

export default withRouter(Alerts);
