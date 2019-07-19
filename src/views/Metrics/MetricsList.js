import React, { Component } from 'react';
/* Mui */
import {
  Grid,
  Typography,
  Divider
} from '@material-ui/core'
/* Redux & Actions */
import { connect } from 'react-redux'
import { selectMetric } from 'data/actions/metrics'
/* Mui */
import { withStyles } from '@material-ui/core/styles';
/* View Snippets */
import MetricButton from 'views/Metrics/MetricButton'

class MetricsList extends Component {

  selectMetric = (metric) => {
    this.props.dispatch(selectMetric(metric))
  }

  render() {
    const { asset, metrics, classes, description = false } = this.props


    if(metrics && metrics.length > 0){
      return (
        <Grid container direction="row" justify="flex-start" alignItems="center" className={classes.root}>
          {description &&
            <Grid item xs={12}>
              <Typography variant="subtitle1" align="center" color="primary">Metrics</Typography>
              <Divider variant="middle" />
            </Grid>
          }

          {metrics.map((metric, i) => (
            <Grid key={i} item sm={12} md={6} onClick={(evt) => this.selectMetric(metric)}>
              <MetricButton label={metric.label} reading={metric.result} unit={metric.unit} />
            </Grid>
          ))}
        </Grid>
      )
    }


    return (<Typography align="center" variant="body1" color="primary">No Metrics Available</Typography>)
  }
}

const mapStateToProps = (state, props) => {
  const metrics = state.metric[props.asset.artifact] ? state.metric[props.asset.artifact] : []
  return {
    metrics: metrics,
    metric: state.metric.current
  }
}

const styles = theme => ({
  root: {
    maxHeight: '320px'
  }
});


export default connect(mapStateToProps)(withStyles(styles)(MetricsList));
