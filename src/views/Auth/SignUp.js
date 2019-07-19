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
  deepPurple
} from '@material-ui/core/colors'
import {
  Grid,
  Button
} from '@material-ui/core';
/* Redux & Actions */
import { connect } from 'react-redux';
import { signupUser } from 'data/actions/authentication';
import { showMessage } from 'data/actions/utils';
/* Utils */
import ValidateInput from 'utils/Views/ValidateInput';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      password: '',
      passwordConfirm: '',
      email: '',
      phone: ''
    }
  }

  componentWillUnmount = () => {
    this.props.dispatch(showMessage(''));
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  signup = (evt) => {
      evt.preventDefault();
      const user = {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        phone: `+${this.state.phone.replace(/[^0-9\\.]+/g, '')}`,
        name: this.state.name
      }

      this.props.dispatch(signupUser(user));
  }

  render() {
    const { classes, username, confirmedAccount } = this.props;
    return (
        <div>
              {username && !confirmedAccount && (<Redirect to="/account/confirm" />)}
              <form className={classes.form} autocomplete="off">
                    <ValidateInput
                      label="Full Name"
                      type="name"
                      name="name"
                      onChange={this.onChange}
                      value={this.state.name}
                      variant="outlined"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />

                    <ValidateInput
                      label="Email"
                      type="email"
                      name="email"
                      onChange={this.onChange}
                      value={this.state.email}
                      variant="outlined"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />


                    <ValidateInput
                      label="Phone"
                      type="phone"
                      name="phone"
                      onChange={this.onChange}
                      value={this.state.phone}
                      mask="+1 (999) 999-9999"
                      variant="outlined"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />

                    <ValidateInput
                      label="Username"
                      type="username"
                      name="username"
                      onChange={this.onChange}
                      value={this.state.username}
                      variant="outlined"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />

                    <ValidateInput
                      label="Password"
                      type="password"
                      name="password"
                      autoComplete="new-password"
                      onChange={this.onChange}
                      value={this.state.password}
                      variant="outlined"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />

                    <ValidateInput
                      label="Confirm Password"
                      type="password"
                      name="passwordConfirm"
                      autoComplete="new-password"
                      onChange={this.onChange}
                      value={this.state.passwordConfirm}
                      match={this.state.password}
                      variant="outlined"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />

                  <Grid container direction="column" alignItems="center" spacing={3}>
                      <Grid item xs={12}>
                        <Button color="primary" variant="contained" onClick={this.signup} >
                          Sign Up
                        </Button>
                      </Grid>

                      <Grid item xs={12}>
                        <Link to='/account/verify' className={classes.subtextLink} >
                          Need to verify an account?
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
    confirmedAccount: state.user.confirmedAccount
  }
};

const styles = theme => ({
  image: {
    display:'block',
    margin:'10% auto'
  },
  bottomlink: {
    fontSize: '12px',
    position: 'fixed',
    bottom: '5%',
    alignSelf:'center',
    color:'#0288d1'
  },
  optionalLink: {
    fontSize: '12px',
    textAlign:'center',
    marginTop: '30%',
    color:'#0288d1'
  },
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
  }
});

export default withRouter(connect(mapStateToProps)(withStyles(styles)(SignUp)));
