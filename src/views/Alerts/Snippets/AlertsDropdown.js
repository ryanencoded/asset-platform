import React, { Component } from 'react'
import {
  Link,
  withRouter
} from 'react-router-dom'
/* Mui */
import {
  withStyles
} from '@material-ui/core/styles'
import {
  Fade,
  Badge,
  Popper,
  Paper,
  ClickAwayListener,
  Typography,
  IconButton,
  Divider,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction
} from '@material-ui/core'
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state'
/* Icons */
import Clear from '@material-ui/icons/Cancel'
/* Custom Utils */
import StateIndicator from 'utils/Views/StateIndicator'
import NotificationButton from 'utils/Views/NotificationButton'
/* Redux & Actions */
import { connect } from 'react-redux'
import { fetchAlerts, clearAlert } from 'data/actions/alerts'


class AlertsDropdown extends Component {
  state = {
    popperEl: null
  }

  componentDidMount() {
    this.props.dispatch(fetchAlerts())
  }

  handleClick = event => {
    const { currentTarget } = event

    this.setState(state => ({
      popperEl: state.popperEl ? null : currentTarget
    }))
  }

  handleClear = (artifact) => {
    this.props.dispatch(clearAlert(artifact))
  }

  render() {
    const { classes, alerts, match, max = 4 } = this.props
    const { popperEl } = this.state
    const open = Boolean(popperEl)

    return (
      <PopupState variant="popper">
        {popupState => (
          <div className={classes.root}>
            <NotificationButton {...bindToggle(popupState)}  count={alerts.length} className={classes.alertIcon} title="Alerts" />

            <Popper {...bindPopper(popupState)} transition>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper className={classes.paper}>
                    <ClickAwayListener onClickAway={popupState.close}>
                      <List subheader={ <ListSubheader className={classes.title}> Alerts </ListSubheader> } classes={{root: classes.alertList}}>
                        { alerts.length !==  0 ?
                          [alerts.slice(0, max).map((alert, i) => {
                            return (
                              <ListItem key={i} component={Link} to={`${match.url}/assets/detail/${alert.asset.artifact}`} className={classes.alertItem}>
                                <ListItemIcon>
                                  <StateIndicator state={alert.state} size={20}/>
                                </ListItemIcon>
                                <ListItemText primary={alert.asset.label} secondary={alert.message.body} classes={{secondary: classes.ellipsis}} />
                                <ListItemSecondaryAction >
                                  <IconButton edge="end" onClick={() => this.handleClear(alert.artifact)}>
                                    <Clear className={classes.clearIcon} />
                                  </IconButton>
                                </ListItemSecondaryAction>
                              </ListItem>
                            )
                          })] : <Typography color="primary" variant="body1"> No Current Alerts </Typography>
                        }

                        { alerts.length > max && (
                          <div>
                            <Divider />
                            <ListItem component={Link} to={`/app/alerts`} className={classes.more} button>
                              <ListItemText primary="View All" classes={{primary: classes.more}} />
                            </ListItem>
                          </div>
                         )}

                      </List>
                    </ClickAwayListener>
                  </Paper>
                </Fade>
              )}
            </Popper>
          </div>
        )}
      </PopupState>
    )
  }
}

const mapStateToProps = state => {
  return {
    alerts: state.alert.data
  }
}

const styles = theme => ({
  root: {
    borderRight: "1px solid #F5F6FB"
  },
  paper: {
    maxWidth: '560px',
    padding: '10px 0px 0px 0px'
  },
  alertIcon: {
    margin: '0 10px'
  },
  alertList: {
    padding: '0px'
  },
  alertItem: {
    "borderTop": "1px solid #F5F6FB",
    "&:last-child": {
      borderTop: "none"
    }
  },
  more: {
    color: theme.palette.primary.main,
    textAlign: "center"
  },
  title: {
    color: theme.palette.primary.main
  },
  clearIcon: {
    color: "#91a1c6"
  },
  ellipsis: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    marginRight: "15px"
  }
});

export default connect(mapStateToProps)(withRouter(withStyles(styles)(AlertsDropdown)));
