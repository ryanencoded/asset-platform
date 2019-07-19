import React, { Component } from 'react';
import {
  withRouter
} from 'react-router-dom';
/* Redux & Actions */
import { connect } from 'react-redux';
/* Mui */
import {
  Grid,
  Paper,
  Typography,
  CircularProgress
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
/* Custom Utils */
import SectionHeader from 'utils/Views/SectionHeader';

class AssetOverview extends Component {

  render() {
    const { classes } = this.props
    const types = [{label: "Total Assets", count: 122}, {label: "Gas Detectors", count: 34},
                   {label: "Fluid Monitors", count: 54},{label: "Power Generators", count: 34}]
    const progress = [{percentage: 53, label: "Uptime"}, {percentage: 67, label: "Good Status"},
                      {percentage: 87, label: "Online"}]
    return (
        <Paper classes={{root: classes.paper}}>
          <SectionHeader
            title="Asset Overview"
            subtitle=""
          />
          <Grid container justify="space-around">
            {types.map((type, i) => (
              <Grid item key={i}>
                <Typography variant="body1" gutterBottom={true}>{type.label}</Typography>
                <Typography variant="h4" gutterBottom={true}>{type.count}</Typography>
              </Grid>
            ))}
            <Grid item container justify="space-around">
              {progress.map((circle, i) => (
                <Grid item key={i}>
                  <CircularProgress size={90} thickness={5} color="primary" variant="static" value={circle.percentage}/>
                  <Typography align="center">{circle.percentage}%</Typography>
                  <Typography align="center">{circle.label}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Paper>
    )
  }
}

const styles = theme =>  ({
  paper: {
    padding: "20px",
    marginTop: '2rem'
  }
})


export default (withStyles(styles)(AssetOverview))
