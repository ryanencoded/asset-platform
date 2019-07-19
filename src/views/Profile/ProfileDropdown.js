import React, { Component } from 'react';
import {
  withRouter,
  Link
} from 'react-router-dom';
/* Mui */
import { withStyles } from '@material-ui/core/styles';
import {
  ButtonGroup,
  Fade,
  Button,
  Paper,
  Popper,
  Typography,
  ClickAwayListener
} from '@material-ui/core';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state'
/* Icons */
import ArrowDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowUpIcon from '@material-ui/icons/ArrowDropDown';
/* Redux & Actions */
import { connect } from 'react-redux';
import { logoutUser } from 'data/actions/authentication';

class ProfileDropdown extends React.Component {
  state = {
    anchorEl: null
  }

  handleClick = event => {
    const { currentTarget } = event;

    this.setState(state => ({
      anchorEl: currentTarget
    }))
  }

  signout = () => {
    this.props.dispatch(logoutUser());
  }

  render() {
    const { classes, user } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl)

    const maskedPhone = `(${user.phone.slice(2,5)}) ${user.phone.slice(5,8)}-${user.phone.slice(8)}`

    return (
      <PopupState variant="popper" popupId="demo-popup-popper">
        {popupState => (
          <div>
            <Button {...bindToggle(popupState)} className={classes.profileButton} color='inherit'>
              {user.name} <ArrowDownIcon />
            </Button>
            <Popper {...bindPopper(popupState)} transition>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper className={classes.paper}>
                    <ClickAwayListener onClickAway={popupState.close}>
                      <div>
                          <div className={classes.info}>
                            <Typography variant="body1"><strong>{user.name}</strong></Typography>
                            <Typography variant="body1">{user.email}</Typography>
                            <Typography variant="body1">{maskedPhone}</Typography>
                          </div>
                          <ButtonGroup fullWidth color="primary" variant="contained">
                            <Button component={Link} to="/app/settings" onClick={this.handleClose}>
                              Edit
                            </Button>
                            <Button onClick={this.signout}>
                              Log Out
                            </Button>
                          </ButtonGroup>
                      </div>
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

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}

const styles = theme => ({
  profileButton: {
    margin: '0 0 0 10px'
  },
  title: {
    color: theme.palette.primary.main
  },
  paper: {
    width: '300px',
    margin: '15px 0 0 0'
  },
  info: {
    padding: '10px',
    textAlign: 'center'
  }
})

export default withRouter(connect(mapStateToProps)(withStyles(styles)(ProfileDropdown)))
