import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
/* Mui */
import {
  InputAdornment,
  Typography,
  IconButton,
  Tooltip,
  Grid,
  Button
 } from '@material-ui/core';
 import { withStyles } from '@material-ui/core/styles';
/* Icons */
import SaveIcon from '@material-ui/icons/Save';
/* Redux & Actions */
import { connect } from 'react-redux';
import { updatePhone, verifyPhone, confirmPhone } from 'data/actions/authentication';
/* Custom Utils */
import ValidateInput from 'utils/Views/ValidateInput';

class PhoneSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: this.props.phone,
      code: '',
      button: this.props.awaiting ? "Confirm Code" : "Verify Phone"
    };
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.phoneAwaitingVerification !== prevProps.phoneAwaitingVerification) {
      if(!this.props.phoneAwaitingVerification) {
        this.setState({ button: "Verify Phone"})
      }
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  updateNumber = () => {
    this.props.dispatch(updatePhone(this.state.phone))
  }

  resendCode = () => {
    this.props.dispatch(verifyPhone("phone_number"))
  }

  verifyPhone = () => {
    if (this.props.awaiting) {
      this.props.dispatch(confirmPhone("phone_number", this.state.code))
    } else {
      this.props.dispatch(verifyPhone("phone_number"))
      this.setState({
        button: 'Confirm Code'
      })
    }
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <Typography variant="subtitle2">Phone Settings</Typography>
        <ValidateInput
            type="phone"
            name="phone"
            value={this.state.phone}
            onChange={this.onChange}
            variant="outlined"
            fullWidth
            mask="+1 (999) 999-9999"
            original={this.props.phone}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={this.updateNumber} color="inherit">
                     <Tooltip title="Save" aria-label="Save">
                       <SaveIcon />
                     </Tooltip>
                   </IconButton>
                </InputAdornment>
              )
            }}
        />
        {!this.props.verified ?
          [
            <Grid key="1" container alignItems="center">
             {this.props.awaiting ?
              <Grid item sm={12}><form>
                <ValidateInput
                  label="Confirmation Code"
                  variant="outlined"
                  type="code"
                  name="code"
                  fullWidth
                  onChange={this.onChange}
                  onKeyDown={this.onKeyDown}
                  value={this.state.code}
                  InputLabelProps={{ shrink: true }}
                /></form></Grid> : null
              }
              <Grid item container justify="flex-end">
                {this.props.awaiting ?
                  <Button className={classes.button} color="primary" variant="contained" onClick={this.resendCode}>Resend Code</Button>
                  : null
                }
                <Button color="primary" variant="contained" onClick={this.verifyPhone}>{this.state.button}</Button>
              </Grid>
            </Grid>
          ] : null }
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    email: state.user.email,
    phone: state.user.phone,
    verified: state.user.phoneVerified,
    awaiting: state.user.phoneAwaitingVerification,
  }
};

const styles = theme => ({
  button: {
    marginRight: '1em'
  }
});

export default  connect(mapStateToProps)(withRouter(withStyles(styles)(PhoneSettings)));
