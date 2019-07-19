import React, { PureComponent } from 'react';
/* Mui */
import {
  Grid,
  Typography,
  Chip
 } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
  grey
} from '@material-ui/core/colors'
/* Redux */
import { connect } from 'react-redux';
import { fetchSelectedPermissions } from 'data/actions/iam'
import { saveService, saveAction } from 'data/actions/iam'

class UserPermissions extends PureComponent {
  componentDidMount() {
    this.props.dispatch(fetchSelectedPermissions(this.props.user))
  }

  getResources = (permissions) => {
    const available = this.props.adminPermissions.map(permission => {
      const arr = permission.artifact.split(':')
      const action = arr.pop()
      const userId = arr.shift()
      const service = arr.join(':')
      return [service, action].join(':')
    })
    //filter out permissions that aren't avilable to be seen
    let chips = permissions.filter(permission => {
      const arr = permission.artifact.split(':')
      const action = arr.pop()
      const userId = arr.shift()
      const service = arr.join(':')
      const compare = [service, action].join(':')
      return available.includes(compare)
    })
    //go through all permissions and pull out all resources for that service and action
    return chips.map(permission => {
      const arr = permission.artifact.split(':')
      const action = arr.pop()
      const userId = arr.shift()
      const service = arr.join(':')
      return permission.resources.map(resource => {
        return {
          service,
          action,
          resource: resource.split('/').pop()
        }
      })
    })
  }

  handleClick = (permission) => {
    this.props.dispatch(saveService(permission.service))
    this.props.dispatch(saveAction(permission.action))
  }

  render() {
    const { classes, permissions, user } = this.props
    const chips = this.getResources(permissions).flat()
    return (
      <div className={classes.root}>
        <Typography variant='body1'> All current permissions for {user.name} </Typography>
        {chips.map( (permission, i) => (
          <Chip
            key={i}
            variant="outlined"
            color="primary"
            value={permission}
            label={`${permission.service}:${permission.action}/${permission.resource}`}
            className={classes.chip}
            onClick={() => this.handleClick(permission)}
          />
        ))
    }
    </div>
  )
}
}

const mapStateToProps = state => {
  const current = state.iam.services.current
  const split = current.split(':')
  const actions = (current, split) => {
    let available = split.length > 1 ? state[split[0]][split[1]].actions : state[current].actions
    return available = available.filter(x => x.available)
  }
  return {
    user: state.iam.user.current,
    permissions: state.iam.permission.user,
    adminPermissions: state.iam.permission.admin,
    services: state.iam.services.data.filter(x => x.available),
    actions: current !== '' ? actions(current, split) : []
  }
}

const styles = theme => ({
  root: {
    backgroundColor: grey[300],
    marginTop: '2rem',
    padding: '1rem'
  },
  chip: {
    margin: theme.spacing(1)
  }
})

export default connect(mapStateToProps)(withStyles(styles)(UserPermissions))
