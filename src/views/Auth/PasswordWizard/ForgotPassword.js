import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
/* Mui */
import { withStyles } from '@material-ui/core/styles';
import { deepPurple, grey } from '@material-ui/core/colors'
import { Grid, Typography, Button } from '@material-ui/core';
/* Custom Utils */
import ValidateInput from 'utils/Views/ValidateInput';
/* Redux & Actions */
import { connect } from 'react-redux';
import { forgotPassword } from 'data/actions/authentication';

class ForgotPassword extends React.Component {
  state = {
    username: ''
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
      this.forgotPassword();
    }
  }

  isReady = (field) => {
    return ((this.state[field] && this.state[field].length > 5) ? true : false)
  }

  forgotPassword = () => {
    this.props.dispatch(forgotPassword(this.state.username))
  }

  render() {
    const { classes, username, forgotPassword } = this.props;
    return (
      <div>
        {username && forgotPassword && (<Redirect to="/password/reset" />)}
        <form className={classes.form}>
              <div className={classes.instructions}>
                <Typography variant="body1">
                  <strong>Enter your username</strong> and we'll send you a code to reset your password
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

            <Grid container direction="column" alignItems="center" spacing={3}>
                  <Grid item xs={12}>
                    <Button color="primary" variant="contained" onClick={this.forgotPassword} >
                      Request Reset
                    </Button>
                  </Grid>

                  <Grid item xs={12} className={classes.helpLinks}>
                    <Link to='/account/verify' className={classes.subtextLink} >
                      Need to verify an account?
                    </Link>
                    <Link to='/auth/login' className={classes.additionalLink} >
                      Nevermind, I remembered my password!
                    </Link>


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
    forgotPassword: state.user.forgotPassword
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
  },
  helpLinks: {
    textAlign: 'center'
  },
  subtextLink: {
    display: 'block',
    color: deepPurple[500],
    textDecoration: "none"
  },
  additionalLink: {
    display: 'block',
    color: grey[500],
    textDecoration: "none"
  }
});

export default withRouter(connect(mapStateToProps)(withStyles(styles)(ForgotPassword)));
