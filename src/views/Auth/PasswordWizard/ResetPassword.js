import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
/* Mui */
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
/* Custom Utils */
import ValidateInput from 'utils/Views/ValidateInput';
/* Redux & Actions */
import { connect } from 'react-redux';
import { forgotPassword, resetPassword } from 'data/actions/authentication';

class ResetPassword extends React.Component {
  state = {
    username: this.props.username,
    code: '',
    password: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onKeyDown = (event: React.KeyboardEvent < HTMLDivElement > ): void => {
    // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      this.resetPassword();
    }
  }

  isReady = (field) => {
    return ((this.state[field] && this.state[field].length > 5) ? true : false)
  }

  forgotPassword = () => {
    this.props.dispatch(forgotPassword(this.state.username))
  }

  resetPassword = () => {
    this.props.dispatch(resetPassword(this.state.username, this.state.code, this.state.password))
  }

  render() {
    const { classes, username, resetPassword } = this.props;
    return (
      <div>
        {username && resetPassword && (<Redirect to="/auth/login" />)}
        <form className={classes.form}>
              <div className={classes.instructions}>
                <Typography variant="body1">
                  <strong>Confirm your password reset</strong> by entering the code sent to your email address and a new password.
                </Typography>
              </div>
              <ValidateInput
                label="Username"
                variant="outlined"
                type="username"
                name="username"
                onChange={this.onChange}
                onKeyDown={this.onKeyDown}
                value={this.state.username}
                InputLabelProps={{ shrink: true }}
                fullWidth
              />

              <ValidateInput
                label="Reset Code"
                variant="outlined"
                type="code"
                name="code"
                onChange={this.onChange}
                onKeyDown={this.onKeyDown}
                value={this.state.code}
                InputLabelProps={{ shrink: true }}
                fullWidth
              />

              <ValidateInput
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                onChange={this.onChange}
                onKeyDown={this.onKeyDown}
                value={this.state.password}
                InputLabelProps={{ shrink: true }}
                fullWidth
              />

            <Grid container direction="column" alignItems="center" spacing={3}>
                  <Grid item xs={12}>
                    <Button color="secondary" variant="contained" onClick={this.resetPassword} >
                      Reset Password
                    </Button>
                  </Grid>

                  <Grid item xs={12}>
                    <Button color="secondary" onClick={this.forgotPassword}>
                      Didn't get a code?
                    </Button>
                  </Grid>
              </Grid>
        </form>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    username: state.user.username,
    resetPassword: state.user.resetPassword
  }
};

const styles = theme => ({
  form: {
    padding: '10px',
    marginTop: '1.5rem',
    marginRight: '1rem',
    marginLeft: '1rem',
    height: '100%'
  },
  instructions: {
    padding: '2rem 0',
    textAlign: 'center'
  }
});

export default withRouter(connect(mapStateToProps)(withStyles(styles)(ResetPassword)));
