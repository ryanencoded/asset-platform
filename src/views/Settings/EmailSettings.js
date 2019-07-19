import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
/* Mui */
import { withStyles } from '@material-ui/core/styles';
import {
  InputAdornment,
  Typography,
  IconButton,
  Tooltip,
  Grid,
  Button
 } from '@material-ui/core';
 /* Icons */
 import SaveIcon from '@material-ui/icons/Save';
/* Utils */
import ValidateInput from 'utils/Views/ValidateInput';
/* Redux */
import { connect } from 'react-redux';
import { updateUserEmail, verifyUserEmail, confirmUserEmail } from 'data/actions/authentication';

class EmailSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      code: 'Code from your email',
      button: this.props.awaiting ? "Confirm Code" : "Verify Email"
    };
  }

  verifyEmail = () => {
    if (this.props.awaiting) {
      this.props.dispatch(confirmUserEmail("email", this.state.code))
    }
    else {
      this.props.dispatch(verifyUserEmail("email"))
      this.setState({
        button: 'Confirm Code'
      })
    }
  }

  resendCode = () => {
    this.props.dispatch(verifyUserEmail("email"))
  }


  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  updateEmail = () => {
    this.props.dispatch(updateUserEmail(this.state.email))
  }

  render() {
    const {classes } = this.props
    return (
      <div>
        <Typography variant="subtitle2">Email Settings</Typography>
        <ValidateInput
           type="email"
           name="email"
           value={this.state.email}
           original={this.props.email}
           onChange={this.onChange}
           variant="outlined"
           fullWidth
           InputProps={{
             startAdornment: (
               <InputAdornment position="start">
                 <IconButton onClick={this.updateEmail} color="inherit">
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
            <Grid container justify="space-between" alignItems="center">
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
                <Button color="primary" variant="contained" onClick={this.verifyEmail}>{this.state.button}</Button>
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
    verified: state.user.emailVerified,
    awaiting: state.user.emailAwaitingVerification
  }
};

const styles = theme => ({
  button: {
    marginRight: '1em'
  }
});

export default connect(mapStateToProps)(withRouter(withStyles(styles)(EmailSettings)));
