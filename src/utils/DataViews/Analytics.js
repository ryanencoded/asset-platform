import React, { Component } from 'react';
import {
  withRouter,
  Route
} from 'react-router-dom';
/* Mui */
import {
  Grid,
  Typography,
  Paper,
  IconButton,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
/* Redux & Actions */
import { connect } from 'react-redux'
import { fetchAsset } from 'data/actions/assets'
/* Icons */
import Close from '@material-ui/icons/Clear';
/* Custom Utils */
import FusionGraph from 'utils/DataViews/FusionGraph'
/* View Snippets */
import MetricsList from 'views/Assets/Snippets/MetricsList'
import AssetTechnology from 'views/Assets/Snippets/AssetTechnology'

class Analytics extends Component {
  componentDidMount() {
    this.fetchAsset()
  }

  fetchAsset = () => {
    const path = this.props.location.pathname
    const asset = path.split('/').pop()
    this.props.dispatch(fetchAsset(asset))
  }

  render() {
    const { classes, asset, metrics } = this.props
    const assetMetrics = metrics[metrics.map(metric => metric.artifact).indexOf(asset.artifact)].metrics
    return (
      <Paper>
        <Grid container justify="space-around">
          <Grid item sm={6}>
            <FusionGraph />
          </Grid>
          <Grid item sm={5}>
            <div>
              <List className={classes.inline}>
                <ListItem>
                  <ListItemIcon>
                    <AssetTechnology technology={asset.technology} />
                  </ListItemIcon>
                  <ListItemText primary={asset.label}  secondary={`${asset.assignment.region} - ${asset.assignment.site}`} />
                </ListItem>
              </List>
              <IconButton
                className={classes.float}
                onClick={() => {this.props.history.push('/app/assets')}}
              >
                <Close />
              </IconButton>
            </div>
            <Grid item>
              <MetricsList
                data={assetMetrics}
                description={false}/>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

const mapStateToProps = state => {
  return {
    asset: state.asset.current,
    metrics: state.asset.metrics
  }
}

const styles = theme => ({
  inline:{
    display: 'inline-block'
  },
  float: {
    float: 'right'
  },
});

export default withRouter(connect(mapStateToProps)(withStyles(styles)(Analytics)))
