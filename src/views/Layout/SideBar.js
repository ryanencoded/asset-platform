import React, {
  Component
} from 'react';
import {
  withRouter,
  NavLink
} from 'react-router-dom';
/* Mui */
import {
  withStyles
} from '@material-ui/core/styles';
import {
  deepPurple
} from '@material-ui/core/colors'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon
} from '@material-ui/core';
/* Custom Utils */
import TooltipIcon from 'utils/Views/TooltipIcon';
import AdminIcon from '@material-ui/icons/People';
import AuthRequired from 'utils/Auth/AuthRequired'



class SideBar extends Component {
  state = {
    open: false
  }

  forwardNavLink = React.forwardRef((props, ref) => (
    <NavLink {...props} innerRef={ref} />
  ))

  handleDrawerOpen = () => {
    this.setState({
      open: true
    });
  };

  handleDrawerClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const {
      classes,
      match,
      children,
      privateMenu,
      publicMenu
    } = this.props;

    return (
      <div className={classes.root}>
        <Drawer variant="permanent" className={classes.drawer}>
          <div className={classes.toolbar}></div>
          <List disablePadding>
            {privateMenu.map((item, i) => (
              <AuthRequired key={i} service={item.service} action={item.action}>
                <ListItem button disableGutters component={this.forwardNavLink} activeClassName={classes.activeRoute} to={`${match.url}${item.path}`}>
                  <ListItemIcon className={classes.itemIcon}><TooltipIcon icon={item.icon} text={item.title} /></ListItemIcon>
                </ListItem>
              </AuthRequired>
            ))}
            {publicMenu.map((item, i) => (
              <ListItem key={i}button disableGutters component={this.forwardNavLink} activeClassName={classes.activeRoute} to={`${match.url}${item.path}`}>
                <ListItemIcon className={classes.itemIcon}><TooltipIcon icon={item.icon} text={item.title} /></ListItemIcon>
              </ListItem>
            ))}
            <ListItem button disableGutters component={this.forwardNavLink} activeClassName={classes.activeRoute} to={`${match.url}/admin/users`}>
              <ListItemIcon className={classes.itemIcon}><TooltipIcon icon=<AdminIcon/> text='Admin' /></ListItemIcon>
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
    </div>
    );
  }
}

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    overflowX: 'hidden',
    width: theme.spacing(9 + 1),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9 + 1),
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(3),
    paddingRight: theme.spacing(3)
  },
  itemIcon: {
    marginRight: '0px',
    padding: '15px'
  },
  activeRoute: {
    borderRightColor: deepPurple[500],
    borderRightWidth: '2px',
    borderRightStyle: 'solid',
    '& > div': {
      color: deepPurple[500]
    }
  }
});

export default withRouter(withStyles(styles, {
  withTheme: true
})(SideBar));
