import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { withRouter, Route, Link } from 'react-router-dom';
/* Mui */
import { withStyles } from '@material-ui/core/styles';
import { Grid, AppBar, Tabs, Tab } from '@material-ui/core';
/* Utils */
import LazyLoader from 'utils/Loading/LazyLoader';
/* View Snippet Components */
import Marketing from 'views/Auth/Marketing';
import AuthHeader from 'views/Auth/AuthHeader';
/* View Route Components */
const Login = Loadable({
  loader: () => import ('./Login'),
  loading: LazyLoader,
});
const SignUp = Loadable({
  loader: () => import ('./SignUp'),
  loading: LazyLoader,
});

 class Auth extends Component {
      hideTab = (route) => {
        if (this.props.location.pathname.match(route)){
          return true;
        }else{
          return false;
        }
      }

      render() {
        const {
          classes,
          match,
          location
        } = this.props;

        return (
          <div>
            <Grid container justify='center'>
              <Grid item md={12} lg={8}>
                <Marketing />
              </Grid>
              <Grid item md={12} lg={4} >

                  <AuthHeader />

                  <AppBar position="static" color="primary" className={classes.appBar}>
                    <Tabs value={location.pathname} centered>
                      <Tab value={`${match.url}/login`} to={`${match.url}/login`} label="Log In"  component={Link} />
                      <Tab value={`${match.url}/signup`} to={`${match.url}/signup`} label="Sign Up"  component={Link} />
                    </Tabs>
                  </AppBar>

                  <div>
                    <Route path={`${match.path}/login`} component={Login} />
                    <Route path={`${match.path}/signup`} component={SignUp} />
                  </div>
              </Grid>
            </Grid>
          </div>
        )
      }
}

const styles = theme => ({
  appBar: {
    //boxShadow: "2px 15px 5px -12px rgba(224,224,224,0.75), 2px 15px 5px -12px rgba(224,224,224,0.75), 2px 15px 5px -12px rgba(224,224,224,0.75)"
    boxShadow: 'none',
    borderBottom: "1px solid #EEE"
  },
  hide: {
    display: 'none'
  },
  show: {
    display: 'inherit'
  }
});

export default withRouter(withStyles(styles)(Auth));
