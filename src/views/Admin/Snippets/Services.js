import React, { Component } from 'react';
/* Mui */
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FilledInput
 } from '@material-ui/core';
 import { withStyles } from '@material-ui/core/styles';
 /* Redux */
 import { connect } from 'react-redux';
 import { saveService, saveAction } from 'data/actions/iam'

 class Services extends Component {
   state = {
     service: ''
   }

   static getDerivedStateFromProps = (nextProps, prevState) => {
     if (nextProps.service !== prevState.service && nextProps.service) {
       return { service: nextProps.service }
     }
     return null
   }

   handleChange = (event) => {
     this.setState({
       service: event.target.value
     })
     this.props.dispatch(saveService(event.target.value))
     this.props.dispatch(saveAction(''))
   }

   componentWillUnmount() {
     this.props.dispatch(saveService(''))
   }

   render() {
    const { classes, services } = this.props
    return (
      <form>
        <FormControl variant="filled">
          <InputLabel>Pick a service</InputLabel>
          <Select
            value={this.state.service}
            onChange={this.handleChange}
            input={<FilledInput value={this.state.service} className={classes.formControl} name="Service"/>}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            {services.map((service, i) => (
              service.available
                ? <MenuItem key={i} value={service.artifact}>{service.label}</MenuItem>
                : null
              )
            )}
          </Select>
        </FormControl>
      </form>
    )
   }
 }

 const mapStateToProps = state => {
   return {
     services: state.iam.services.data,
     service: state.iam.services.current
   }
 }

 const styles = theme => ({
   formControl: {
     minWidth: '100%'
   }
 })

 export default connect(mapStateToProps)(withStyles(styles)(Services));
