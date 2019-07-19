import React, { Component } from 'react';
/* Mui */
import {
  Button,
  Grid
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
/* Redux & Actions */
import { connect } from 'react-redux';
import { changePassword, updateName } from 'data/actions/authentication';
/* Custom Utils */
import ValidateInput from 'utils/Views/ValidateInput';

class ProfileSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      name: this.props.name,
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  updateProfile = () => {
    if (this.state.name !== this.props.name) {
      this.props.dispatch(updateName(this.state.name));
    }
    else {
      this.props.dispatch(changePassword({oldPassword: this.state.oldPassword, newPassword: this.state.newPassword}))
      this.setState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      })
    }
    this.setState({
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    })
  }

  render() {
    const { classes } = this.props

    return(
      <Grid container direction="column" alignContent="stretch" className={classes.root}>
        <Grid item>
          <form>
            <ValidateInput
              label="Username"
              type="username"
              name="username"
              value={this.state.username}
              original={this.props.username}
              variant="outlined"
              InputLabelProps={{shrink:true}}
              fullWidth
              disabled
            />
            <ValidateInput
              label="Name"
              type="name"
              name="name"
              value={this.state.name}
              original={this.props.name}
              variant="outlined"
              onChange={this.onChange}
              InputLabelProps={{shrink:true}}
              fullWidth
            />
            <ValidateInput
              label="Current Password"
              type="password"
              name="oldPassword"
              value={this.state.oldPassword}
              onChange={this.onChange}
              autoComplete="current-password"
              variant="outlined"
              InputLabelProps={{shrink:true}}
              fullWidth
            />
            <ValidateInput
              label="New Password"
              type="password"
              name="newPassword"
              value={this.state.newPassword}
              onChange={this.onChange}
              autoComplete="new-password"
              variant="outlined"
              InputLabelProps={{shrink:true}}
              fullWidth
            />
            <ValidateInput
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.onChange}
              match={this.state.newPassword}
              autoComplete="new-password"
              variant="outlined"
              InputLabelProps={{shrink:true}}
              fullWidth
            />
          </form>
        </Grid>
        <Grid item justify="flex-end" container>
        <Button color="primary" variant="contained" onClick={this.updateProfile} >
          Update
        </Button>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    name: state.user.name,
    username: state.user.username,
  }
}

const styles = theme => ({
  root: {
    padding: '1rem'
  }
})

export default connect(mapStateToProps)(withStyles(styles)(ProfileSettings));
