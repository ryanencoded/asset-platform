import React, { Component } from 'react';
/* Mui */
import {
  Button
 } from '@material-ui/core';
 import SaveIcon from '@material-ui/icons/Save';
 /* Redux */
 import { connect } from 'react-redux';
 import { savePermissions } from 'data/actions/iam'

 class SaveResourceButton extends Component {
   state = {
     isDisabled: true,
     newResources: []
   }

   componentDidMount() {
     this.checkResourceUpdate(this.props)
   }

   componentDidUpdate = (prevProps) => {
     if (prevProps.allSelected !== this.props.allSelected ||
         prevProps.newResources.length !== this.props.newResources.length ||
         prevProps.oldResources.length !== this.props.oldResources.length ||
         prevProps.newResources.some((resource, i) => resource.checked !== this.props.newResources[i].checked) ||
         prevProps.oldResources.some((resource, i) => resource.checked !== this.props.oldResources[i].checked)
        ) {
       this.checkResourceUpdate(this.props)
     }
   }

   checkResourceUpdate = (props) => {
     const { newResources, oldResources, allSelected, userHasAll, service } = props
     let hasChanged = false
     let list = []
     if (allSelected) {
       if (!userHasAll) {
         hasChanged = true
         list = [`srn:integritty:${service}/*`]
       }
     } else {
       //if some of old resources changed checked status then has changed
       hasChanged = newResources.some((resource, i) => {
         return resource.checked !== oldResources[i].checked
       })
       if (hasChanged) {
         const filter = newResources.filter(resource => resource.checked)
         list = filter.map(resource => resource.resource)
       }
       // in the case that there are no resources but want to delete user permissions to all resources
       else {
         if (userHasAll) {
           hasChanged = true
         }
       }
     }
     this.setState({
       isDisabled: !hasChanged,
       newResources: list
     })
   }

   savePermissions = () => {
     const { action, service, user } = this.props
     if (this.props.allSelected) {
       this.props.dispatch(savePermissions({
         user,
         action,
         service,
         resources: [`srn:integritty:${this.props.service}/*`]
       }))
     } else {
       this.props.dispatch(savePermissions({
         user,
         action,
         service,
         resources: this.state.newResources
       }))
     }
   }

   render() {
     const { isDisabled } = this.state
     return (
       <Button color="primary" size="large" disabled={isDisabled} onClick={this.savePermissions}>
        <SaveIcon  />
        Save
      </Button>
     )
   }
 }

 const mapStateToProps = state => {
   return {
     action: state.iam.actions.current,
     service: state.iam.services.current,
     user: state.iam.user.current
   }
 }

 export default connect(mapStateToProps)(SaveResourceButton)
