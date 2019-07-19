import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
/* Mui */
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
/* Utils */
import ValidateInput from 'utils/Views/ValidateInput';
/* Redux & Actions */
import { connect } from 'react-redux';
import { verifyAccount, confirmAccount } from 'data/actions/authentication';


class ConfirmAccount extends React.Component {
  state = {
    username: this.props.username,
    code: ''
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
      this.verifyEmail();
    }
  }

  isReady = (field) => {
    return ((this.state[field] && this.state[field].length >= 5) ? true : false)
  }

  verifyAccount = () => {
    this.props.dispatch(verifyAccount(this.state.username))
  }

  confirmAccount = () => {
    this.props.dispatch(confirmAccount(this.state.username, this.state.code))
  }

  render() {
    const { classes, username, confirmedAccount } = this.props;
    return (
      <div>
        {username && confirmedAccount && (<Redirect to="/auth/login" />)}
        <form className={classes.form}>
              <div className={classes.instructions}>
                <Typography variant="body1">
                  <strong>Confirm your account</strong> by entering the code sent to your email address.
                </Typography>
              </div>
              <ValidateInput
                label="Confirmation Code"
                variant="outlined"
                type="code"
                name="code"
                onChange={this.onChange}
                onKeyDown={this.onKeyDown}
                value={this.state.code}
                InputLabelProps={{ shrink: true }}
                fullWidth
              />

            <Grid container direction="column" alignItems="center" spacing={3}>
                  <Grid item xs={12}>
                    <Button color="primary" variant="contained" onClick={this.confirmAccount} >
                      Confirm Account
                    </Button>
                  </Grid>

                  <Grid item xs={12}>
                    <Button color="secondary" onClick={this.verifyAccount}>
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
    confirmedAccount: state.user.confirmedAccount
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

export default withRouter(connect(mapStateToProps)(withStyles(styles)(ConfirmAccount)));
