import React, { Component } from 'react';
/* MUI */
import {
  Switch,
  FormControlLabel,
  Typography
} from '@material-ui/core';
/* Redux */
import { connect } from 'react-redux';
import { notificationsAllowed } from 'data/actions/notifications';

class NotificationSettings extends Component {

  toggleSwitch = event => {
    this.props.dispatch(notificationsAllowed(!this.props.optedIn));
  }

  render() {
    return(
      <div>
        <Typography variant="subtitle2">Notification Settings</Typography>
        {
          !this.props.verified &&
            <Typography variant="caption" color="error">
            Please verify your email and phone to opt in
            </Typography>
        }
        <FormControlLabel
          control={
            <Switch
              checked={this.props.optedIn}
              onChange={this.toggleSwitch}
              color="primary"
              disabled= {!this.props.verified}
            />
          }
          labelPlacement="end"
          label="Receive alerts to your email"
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    optedIn: state.notification.optedIn,
    verified: state.user.emailVerified && state.user.phoneVerified
  }
};

export default connect(mapStateToProps)(NotificationSettings);
