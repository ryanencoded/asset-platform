import React, { Component } from 'react'
import classNames from 'classnames'
/* Mui */
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography
} from '@material-ui/core';
/* Fusion Charts */
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import Widgets from 'fusioncharts/fusioncharts.widgets';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
FusionCharts.options.creditLabel = false;
ReactFusioncharts.fcRoot(FusionCharts, Widgets, FusionTheme);


class FusionChart extends Component {

  render() {
    const { classes, size = size || 300, className, metric } = this.props

    const styles = {
      "height": size,
      "width": size,
    }

    return (
      <div style={styles} className={classes.root}>
        { metric && metric.presentation && metric.chart
          ? <ReactFusioncharts
              className={classNames(className, classes.chart)}
              type={metric.presentation}
              width="100%"
              height="100%"
              dataFormat="JSON"
              dataSource={metric.chart}
              containerBackgroundOpacity="0"
            />
          : <Typography variant="body1" color="primary" align="center">No Chart Available</Typography>
        }
      </div>
    )
  }
}

const styles = theme => ({
  root: {
    // boxShadow: "0 2px 7px 0 rgba(213, 220, 236, 0.3)",
    position: 'relative',
    display: 'inline-block'
  },
  chart: {
    display: 'inline-block',
    margin: '0 auto'
  }
});

export default withStyles(styles)(FusionChart)
