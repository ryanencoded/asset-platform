import React from 'react';
import {
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import {
  withStyles
} from '@material-ui/core/styles';
import {
  grey,
  deepPurple
} from '@material-ui/core/colors'
import {
  Grid,
  Button
} from '@material-ui/core';

/* Redux & Actions */
import { connect } from 'react-redux';
import { loginUser } from 'data/actions/authentication';
import { showMessage } from 'data/actions/utils';
/* Utils */
import ValidateInput from 'utils/Views/ValidateInput';

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  componentWillUnmount = () => {
    this.props.dispatch(showMessage(''));
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  login = (evt) => {
    evt.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    this.props.dispatch(loginUser(user));
    this.props.history.push("/app/assets")
  }

  onKeyDown = (event: React.KeyboardEvent < HTMLDivElement > ): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      this.login(event);
    }
  }

  isReady = (field) => {
    if(this.state[field] && this.state[field].length > 5){
      return true
    }else{
      return false
    }
  }

  showFail = (message) => {
      this.props.dispatch(showMessage(message));
  };

  render() {
    const {
      classes,
      isAuthenticated
    } = this.props;

    return (
      <div>
            <form className={classes.form}>
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
                      <Button color="primary" variant="contained" onClick={this.login} >
                        Log In
                      </Button>
                    </Grid>

                    <Grid item xs={12}>
                      <Link to='/password/forgot' className={classes.subtextLink} >
                        Forgot your password?
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
    isAuthenticated: state.user.isAuthenticated
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

export default withRouter(connect(mapStateToProps)(withStyles(styles)(Login)));
