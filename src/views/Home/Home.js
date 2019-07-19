import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
/* Animation */
import { animated } from 'react-spring/renderprops'
/* Mui */
import {
  Grid,
  Typography,
  Paper,
  Card,
  CardHeader,
  CardContent,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { deepPurple, grey } from '@material-ui/core/colors'
/* Custom Utils */
import StateIndicator from 'utils/Views/StateIndicator'
import SectionHeader from 'utils/Views/SectionHeader'
import FusionGraph from 'utils/DataViews/FusionGraph'
import DateDisplay from 'utils/Functions/DateDisplay'
/* View Snippet Components */
import AlertList from 'views/Alerts/AlertList'
import Header from 'views/Home/Snippets/Header'
import AssetOverview from 'views/Assets/Snippets/AssetOverview'

class Home extends Component {
  render() {
    const { style, classes, assets } = this.props;
    return(
      <animated.div style={{ ...style}}>
        <Header />
        <Grid container justify="space-around">
          <Grid item sm={12} md={6}>
            <Typography
              align="center"
              variant="body2"
              color="primary"
              gutterBottom
            >
              Most Recently Updated
            </Typography>
            <FusionGraph height="495"/>
          </Grid>
          <Grid item sm={12} md={5}>
              <Typography
                variant="body1"
                align="center"
                color="primary"
                gutterBottom
              >
              Alerts
              </Typography>
              <Paper className={classes.paper}>
                <AlertList />
              </Paper>
              <AssetOverview />
          </Grid>
        </Grid>
      </animated.div>
    )
  }
}

const styles = theme =>  ({
  padding:{
    margin: "1rem 0 1rem 0"
  },
  block: {
    display: "inline-block"
  },
  typography: {
    color: grey[100]
  },
  title: {
    color: grey[100]
  },
  subheader: {
    color: grey[100]
  },
  paper: {
    height: "45%"
  }
})

export default withRouter(withStyles(styles)(Home));
