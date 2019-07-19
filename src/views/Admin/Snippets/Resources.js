import React, { Component } from 'react';
import {
  withRouter,
  Link
} from 'react-router-dom';
/* Mui */
import {
  Paper,
  Grid,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Checkbox,
  FormControlLabel,
  ButtonGroup,
  Button
 } from '@material-ui/core';
 import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
 import { withStyles } from '@material-ui/core/styles';
 /* Redux */
 import { connect } from 'react-redux';
 /* View Snippets */
 import ResourceSelect from 'views/Admin/Snippets/ResourceSelect'
 import SaveButton from 'views/Admin/Snippets/SaveResourceButton'

 class Resources extends Component {
   state = {
     availableResources: [],
     userPerm: [],
     adminPerm: [],
     toSave: [],
     allSelected: false,
     action: this.props.action
   }

   static getDerivedStateFromProps = (nextProps, prevState) => {
     const action = nextProps.action ? nextProps.action : prevState.action
     //filtering user and admin permissions by service and action
     let userPerm = nextProps.userPermissions.filter(permission => {
       return permission.artifact == `${nextProps.user}:${nextProps.service}:${action}`
     })
     let adminPerm = nextProps.adminPermissions.filter(permission => {
       return permission.artifact == `${nextProps.adminId}:${nextProps.service}:${action}`
     })
    // pulling out the resources available for those permissions
    userPerm = userPerm.length !== 0 ? userPerm[0].resources : []
    adminPerm = adminPerm.length !== 0 ? adminPerm[0].resources : []
    return {
      userPerm,
      adminPerm,
      action
    }
   }

   componentDidUpdate(prevProps, prevState) {
     //Finding what resources users already have
     if ((this.props.action !== prevProps.action) && (this.props.action !== '')) {
       const allSelected = this.state.userPerm[0] == `srn:integritty:${this.props.service}/*`
       this.setState({ allSelected })
     }
     //if a new service picked, find the default resources already available for that user
     if (this.props.service !== prevProps.service) {
       const toSave = this.findDefaultResources(this.state.availableResources, this.state.userPerm)
       this.setState({ toSave })
     }
     if (this.state.adminPerm.some(perm => !prevState.adminPerm.includes(perm)) || this.state.adminPerm.length !== prevState.adminPerm.length){
       const available = this.state.adminPerm.length !== 0 ? this.findAvailableResources(this.state.adminPerm) : []
       this.setState({ availableResources: available })
     }
   }

   findAvailableResources = (permissions) => {
     if (permissions[0] !== `srn:integritty:${this.props.service}:/*`) {
       return this.props.resource.map(resource => `srn:integritty:${this.props.service}/${resource.artifact}`)
     }
     return []
   }

   findDefaultResources = (available, userPerm) => {
     return available.map(resource => {
       if (userPerm.includes(resource) || userPerm[0] ==`srn:integritty:${this.props.service}/*`){
         return { resource, checked: true }
       }
       return { resource, checked: false }
     })
   }

   toggleSelectAll = (i, checked)  => {
     this.setState({
       allSelected: checked,
       toSave: this.findDefaultResources(this.state.availableResources, this.state.userPerm)
     })
   }

   toggleSome = (i, checked) => {
     const newSave = this.state.toSave.slice(0)
     //make new array, and change the checked
     newSave[i] = {...newSave[i], checked: checked}
     this.setState({
       toSave: newSave
     })
   }

   render() {
     const { service, classes, match } = this.props
     const { allSelected, userPerm, adminPerm, toSave, availableResources, action } = this.state
     const expandResourceSelect = () => {
       if (service && action) return true
       return false
     }
     return (
        <Grid container justify='center'>
          <Grid item sm={12}><Typography align='left' gutterBottom={true}>Give user access to the resources below:</Typography></Grid>
          <Grid item sm={12}>
            <ResourceSelect
              label='Select All'
              disabled={((!service || !action) || (adminPerm[0] !== `srn:integritty:${service}/*`))}
              expanded={expandResourceSelect()}
              handleClick={this.toggleSelectAll}
              determineCheck={[{resource:`srn:integritty:${service}/*`, checked: allSelected}]}
            />
          </Grid>
          <Grid item sm={12}>
            <ResourceSelect
              label='Select Resource(s)'
              disabled={(allSelected || (availableResources == 0))}
              expanded={(!allSelected && availableResources.length !== 0)}
              handleClick={this.toggleSome}
              determineCheck={toSave}
              expandIcon={<ExpandMoreIcon />}
            />
          </Grid>
          <Grid container className={classes.button} item justify="flex-end" sm={12}>
            <ButtonGroup variant="contained" color="primary" size="large">
              <SaveButton
                allSelected={allSelected}
                userHasAll={userPerm[0] == `srn:integritty:${service}/*`}
                newResources={toSave}
                oldResources={this.findDefaultResources(availableResources, userPerm)}
              />
              <Button
                component={Link}
                to={`/app/admin/users`}
              >
                Go Back
              </Button>
              </ButtonGroup>
          </Grid>
        </Grid>
    )
   }
 }

 const mapStateToProps = (state, props) => {
   const service = state.iam.services.current.split(":")[0] ? state.iam.services.current.split(":")[0] : 'iam'
   const user = props.location.pathname.split('/').pop()
   return {
     user: user,
     userPermissions: state.iam.permission.user,
     adminPermissions: state.iam.permission.admin,
     action: state.iam.actions.current,
     service: state.iam.services.current,
     adminId: state.user.userId,
     resource: state[service].data && service !== 'iam' ? state[service].data : []
   }
 }

 const styles = theme => ({
   button: {
     marginTop: '4%'
   }
 })

 export default withRouter(connect(mapStateToProps)(withStyles(styles)(Resources)));
