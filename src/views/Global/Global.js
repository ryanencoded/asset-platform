import React, { Component } from 'react';
import Loadable from 'react-loadable';
/* Mui */
import DefaultTheme from 'styles/DefaultTheme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import {
  withRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
/* Redux & Actions */
import { connect } from 'react-redux';
import { showMessage } from 'data/actions/utils';
/* Custom Utils */
import LazyLoader from 'utils/Loading/LazyLoader';
import SnackbarDisplay from 'utils/Views/SnackbarDisplay';
import PrivateRoute from 'utils/Auth/PrivateRoute';
/* View Route components */
const Auth = Loadable({
  loader: () => import ('views/Auth/Auth'),
  loading: LazyLoader,
});

const PasswordWizard = Loadable({
  loader: () => import ('views/Auth/PasswordWizard/PasswordWizard'),
  loading: LazyLoader,
});

const AccountManager = Loadable({
  loader: () => import ('views/Auth/AccountManager/AccountManager'),
  loading: LazyLoader,
});

const App = Loadable({
  loader: () => import ('views/App/App'),
  loading: LazyLoader,
});

class Global extends Component {
  state = {
    authenticated: false
  }

  handleSnackbarClose = () => {
    this.props.dispatch(showMessage(''));
  }

  render() {
    const { message } = this.props;
    return (
      <MuiThemeProvider theme={DefaultTheme}>
            <Route render={({ location }) => (
                <Switch location={location} key={location.key}>
                  <Route path='/auth' component={Auth} />
                  <Route path='/password' component={PasswordWizard} />
                  <Route path='/account' component={AccountManager} />
                  <PrivateRoute path='/app' component={App} />
                  <Route path='/' render={props => (
                    <Redirect to={{ pathname: "/app/assets", state: { from: props.location } }} />
                  )}/>
                </Switch>
              )}
            />

          <SnackbarDisplay heading={message.text} open={message.visible} handleSnackbarClose={this.handleSnackbarClose}/>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.util.message
  }
};

export default withRouter(connect(mapStateToProps)(Global));
