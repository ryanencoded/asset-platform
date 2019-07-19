import React, { Component } from 'react';
import Loadable from 'react-loadable';
import {
  withRouter
} from 'react-router-dom';
/* Mui */
import { withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
/* Icons */
import HomeIcon from '@material-ui/icons/HomeOutlined'
import AssetsIcon from '@material-ui/icons/StarBorder'
import SettingsIcon from '@material-ui/icons/SettingsOutlined'
import AlertsIcon from '@material-ui/icons/NotificationsOutlined'
/* Redux */
import { connect } from 'react-redux';
import { fetchAssets } from 'data/actions/assets';
import { fetchAlerts } from 'data/actions/alerts'
import { fetchAllMetrics } from 'data/actions/metrics';
import { fetchUsers } from 'data/actions/iam';
import { fetchUserPermissions } from 'data/actions/authentication';
/* Custom Utils */
import LazyLoader from 'utils/Loading/LazyLoader';
import PrivateRoute from 'utils/Auth/PrivateRoute';
/* View Snippet Components */
import Header from 'views/Layout/Header';
import SideBar from 'views/Layout/SideBar';
/* View Route components */
const Assets = Loadable({
  loader: () => import ('views/Assets/Assets'),
  loading: LazyLoader,
})

const Alerts = Loadable({
  loader: () => import ('views/Alerts/Alerts'),
  loading: LazyLoader
})

const Home = Loadable({
  loader: () => import ('views/Home/Home'),
  loading: LazyLoader,
})

const Settings = Loadable({
  loader: () => import ('views/Settings/Settings'),
  loading: LazyLoader
})

const Admin = Loadable({
  loader: () => import ('views/Admin/Admin'),
  loading: LazyLoader
})

const LoginTest = Loadable({
  loader: () => import('views/Auth/Test'),
  loading: LazyLoader
})

/* Menu Items */
const privateMenu = [
  {
    component: Assets,
    title: "Assets",
    path: '/assets',
    service: 'asset',
    action: 'read',
    icon: <AssetsIcon />
  },
  {
    component: Alerts,
    title: "Alerts",
    path: '/alerts',
    service: 'alert',
    action: 'read',
    icon: <AlertsIcon />
  }
]

const publicMenu = [
  {
    component: Settings,
    title: "Settings",
    path: '/settings',
    service: 'settings',
    icon: <SettingsIcon />
  }
]

class App extends Component {
  state = {
    authenticated: false
  }

  fetchData(){
    this.props.dispatch(fetchAssets())
    this.props.dispatch(fetchUsers())
    this.props.dispatch(fetchAlerts())
    this.props.dispatch(fetchAllMetrics())
    this.props.dispatch(fetchUserPermissions())
  }

  componentDidMount(){
    this.fetchData()
    this.timer = setInterval(() => {
      this.fetchData()
    }, 50000)
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  render() {
    const { classes, match } = this.props;
    return (
      <div>
        <CssBaseline />
        <Header/>
        <SideBar privateMenu={privateMenu} publicMenu={publicMenu}>
          <div>
            {privateMenu.map((item, i) => (
              <PrivateRoute key={i} path={`${match.path}${item.path}`} component={item.component}/>
            ))}

            {publicMenu.map((item, i) => (
              <PrivateRoute key={i} path={`${match.path}${item.path}`} component={item.component}/>
            ))}
            <PrivateRoute path={`${match.path}/admin`} component={Admin}/>
            <PrivateRoute path={`${match.path}/test`} component={LoginTest}/>
          </div>
        </SideBar>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {}
}

export default withRouter(connect(mapStateToProps)(App));
