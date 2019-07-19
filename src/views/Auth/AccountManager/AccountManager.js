import React from 'react';
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
const VerifyAccount = Loadable({
  loader: () => import ('./VerifyAccount'),
  loading: LazyLoader,
});

const ConfirmAccount = Loadable({
  loader: () => import ('./ConfirmAccount'),
  loading: LazyLoader,
});


 class AccountManager extends React.Component {
   
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
                      <Tab value={`${match.url}/verify`} to={`${match.url}/verify`} label="Verify Account" component={Link} className={this.hideTab(`${match.url}/verify`) ? classes.show : classes.hide} />
                      <Tab value={`${match.url}/confirm`} to={`${match.url}/confirm`} label="Confirm Account" component={Link} className={this.hideTab(`${match.url}/confirm`) ? classes.show : classes.hide} />
                    </Tabs>
                  </AppBar>

                  <div>
                    <Route path={`${match.path}/verify`} component={VerifyAccount} />
                    <Route path={`${match.path}/confirm`} component={ConfirmAccount} />
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

export default withRouter(withStyles(styles)(AccountManager));
