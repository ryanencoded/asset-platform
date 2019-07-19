import React, { PureComponent } from 'react';
import classnames from "classnames"
/* Mui */
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
} from '@material-ui/core';
import { connect } from 'react-redux'

class AlertCount extends PureComponent {
  render() {
    const { classes, alerts, asset } = this.props;
    return (
      <div>
        <Typography variant='subtitle1' className={classnames(classes.primaryText, { [classes.active] : alerts.length > 0 })}>{alerts.length}</Typography>
        <Typography variant='subtitle1' className={classnames(classes.secondaryText, { [classes.active] : alerts.length > 0 })}>Alerts</Typography>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    alerts: state.alert.data.filter((alert) => alert.asset.artifact == props.asset)
  }
}

const styles = theme => ({
  active: {
    color: theme.palette.primary.main
  },
  primaryText: {
    fontSize: 25
  },
  secondaryText: {
    fontSize: 15
  }
});

export default connect(mapStateToProps)(withStyles(styles)(AlertCount))
