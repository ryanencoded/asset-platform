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
const ForgotPassword = Loadable({
  loader: () => import ('./ForgotPassword'),
  loading: LazyLoader,
});

const ResetPassword = Loadable({
  loader: () => import ('./ResetPassword'),
  loading: LazyLoader,
});


 class PasswordWizard extends Component {

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
              <Grid item lg={8}>
                <Marketing />
              </Grid>
              <Grid item lg={4} >

                  <AuthHeader />

                  <AppBar position="static" color="primary" className={classes.appBar}>
                    <Tabs value={location.pathname} centered>
                      <Tab value={`${match.url}/forgot`} to={`${match.url}/forgot`} label="Forgot Password" component={Link} className={this.hideTab(`${match.url}/forgot`) ? classes.show : classes.hide} />
                      <Tab value={`${match.url}/reset`} to={`${match.url}/reset`} label="Reset Password" component={Link} className={this.hideTab(`${match.url}/reset`) ? classes.show : classes.hide} />
                    </Tabs>
                  </AppBar>

                  <div>
                    <Route path={`${match.path}/forgot`} component={ForgotPassword} />
                    <Route path={`${match.path}/reset`} component={ResetPassword} />
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

export default withRouter(withStyles(styles)(PasswordWizard));
