import React, { Component } from 'react';
import classNames from 'classnames';
import {
  withRouter,
  Route,
  Link
} from 'react-router-dom';
/* Mui */
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  IconButton,
  Tooltip,
  Button,
  Divider,
  Card,
  CardActions,
  CardHeader,
  CardContent
} from '@material-ui/core';
/* Redux & Actions */
import { connect } from 'react-redux'
import { selectAsset } from 'data/actions/assets'
/* Icons */
import CloseIcon from '@material-ui/icons/Clear';
/* Custom Utils */
import FusionChart from 'utils/DataViews/FusionChart'
import StateIndicator from 'utils/Views/StateIndicator'
/* Redux */
import { selectMetric } from 'data/actions/metrics'
/* View Snippets */
import AssetTechnology from 'views/Assets/Snippets/AssetTechnology'
import AssetHeader from 'views/Assets/Snippets/AssetHeader'
import AssetAlerts from 'views/Alerts/Snippets/AssetAlerts'
/* View Components */
import MetricsList from 'views/Metrics/MetricsList'


class AssetDetail extends Component {

  componentDidMount = () => {
    this.props.dispatch(selectMetric({}))
  }

  render() {
    const { asset, classes, match, metric } = this.props;

    return (
        <Card className={classes.card} >
          <CardHeader
            action={
              <IconButton className={classes.float} component={Link} to={`/app/assets`}>
                { !this.props.list ? <CloseIcon /> : null}
              </IconButton>
            }
            disableTypography
            title={<AssetHeader asset={asset} />}
          />

          <Divider variant="middle" />

          <CardContent>
            <Grid container>
              <Grid item md={3} className={classes.chart}>
                <FusionChart metric={metric} />
              </Grid>
              <Grid container item md={9}>
                <Grid item md={8} className={classNames(classes.metrics, classes.spacing)}>
                  <MetricsList asset={asset} />
                </Grid>
                <Grid item md={4} className={classNames(classes.spacing)}>
                  <AssetAlerts asset={asset.artifact} />
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
          <Divider variant="middle" />
          <CardActions className={classes.float}>
              <Button color="primary" disabled className={classes.analytics}>View Analytics</Button>
          </CardActions>
      </Card>
    )
  }
}

const mapStateToProps = (state, props) => {
  const assetArtifact = props.location.pathname.split('/').pop()
  const asset = state.asset.data.find(x => x.artifact == assetArtifact)

  return {
    asset: asset,
    list: state.util.list,
    metric: state.metric.current
  }
}

const styles = theme => ({
  metrics: {
    borderRight: '1px solid #d8d8d8',
    borderLeft: '1px solid #d8d8d8'
  },
  float: {
    float: 'right'
  },
  spacing: {
    padding: '10px'
  },
  analytics: {
    margin: '10px',
    float: 'right'
  },
  chart: {
    padding: '1rem',
    textAlign: 'center'
  }
})

export default withRouter(connect(mapStateToProps)(withStyles(styles)(AssetDetail)));
