import React, { Component } from 'react';
import {
  withRouter,
  Link
} from 'react-router-dom';
/* Mui */
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography
} from '@material-ui/core';
/* Logo */
import Logo from 'utils/logo.png';
/* View Components */
import ProfileDropdown from 'views/Profile/ProfileDropdown';
import AlertsDropdown from 'views/Alerts/Snippets/AlertsDropdown';

class Header extends Component {

  render() {
    const { classes, title } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              disableRipple
              component={Link}
              to={`/app/assets`}
            >
              <img src={Logo} alt="Logo" className={classes.image}/>
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              {title}
            </Typography>
            <AlertsDropdown />
            <ProfileDropdown />

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -22,
    marginRight: 20,
    "&:hover": {
        backgroundColor: 'transparent'
    }
  },
  image: {
    maxHeight: "35px",
    marginLeft: '10px'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  }
});

export default withRouter(withStyles(styles)(Header));
