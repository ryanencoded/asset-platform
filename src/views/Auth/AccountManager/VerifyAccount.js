import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
/* Mui */
import { withStyles } from '@material-ui/core/styles';
import { grey, deepPurple } from '@material-ui/core/colors'
import { Grid, Typography, Button } from '@material-ui/core';
/* Custom Utils */
import ValidateInput from 'utils/Views/ValidateInput';
/* Redux & Actions */
import { connect } from 'react-redux';
import { verifyAccount } from 'data/actions/authentication';

class VerifyAccount extends React.Component {
  state = {
    username: this.props.username
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
      this.verifyAccount();
    }
  }

  isReady = (field) => {
    return ((this.state[field] && this.state[field].length >= 5) ? true : false)
  }

  verifyAccount = () => {
    this.props.dispatch(verifyAccount(this.state.username))
  }

  render() {
    const { classes, username, verifiedAccount } = this.props;
    return (
      <div>
        {username && verifiedAccount && (<Redirect to="/account/confirm" />)}
        <form className={classes.form}>
              <div className={classes.instructions}>
                <Typography variant="body1">
                  <strong>Enter your username</strong> and we will send you a confirmation code
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
                    <Button color="primary" variant="contained" onClick={this.verifyAccount} >
                      Verify Account
                    </Button>
                  </Grid>

                  <Grid item xs={12}>
                    <Link to='/auth/login' className={classes.subtextLink} >
                      Nevermind, my account is already verified!
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
    verifiedAccount: state.user.verifiedAccount
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
  subtextLink: {
    color: deepPurple[500],
    textDecoration: "none"
  },
  checkReady: {
    color: deepPurple[500]
  },
  checkNotReady: {
    color: grey[50]
  }
});

export default withRouter(connect(mapStateToProps)(withStyles(styles)(VerifyAccount)));
