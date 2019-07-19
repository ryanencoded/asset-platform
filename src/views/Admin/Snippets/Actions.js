import React, { Component } from 'react';
/* Mui */
import {
  FormGroup,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FilledInput
 } from '@material-ui/core';
 import { withStyles } from '@material-ui/core/styles';
 /* Redux */
 import { connect } from 'react-redux';
 import { saveAction } from 'data/actions/iam';

 class Actions extends Component {
   state = {
     action: ''
   }

   static getDerivedStateFromProps = (nextProps, prevState) => {
     if (nextProps.action !== prevState.action && nextProps.action) {
       return { action: nextProps.action }
     }
     return null
   }

   handleChange = (event) => {
     this.setState({
       action: event.target.value
     })
     this.props.dispatch(saveAction(event.target.value))
   }

   render() {
     const { classes} = this.props
     const actions = this.props.actions ? this.props.actions : []
    return (
      <FormGroup>
        <FormControl variant="filled">
          <InputLabel htmlFor="filled-age-simple">Pick an action</InputLabel>
          <Select
            value={this.state.action}
            onChange={this.handleChange}
            input={<FilledInput value={this.state.action} className={classes.formControl} name="Action"/>}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            {actions.map((action, i) => (
              action.available
                ? <MenuItem key={i} value={action.artifact}>{action.label}</MenuItem>
                : null
              ))
            }
          </Select>
        </FormControl>
      </FormGroup>
    )
   }
 }

 const mapStateToProps = state => {
   const current = state.iam.services.current
   const split = current.split(':')
   const actions = (current, split) => {
     return split.length > 1 ? state[split[0]][split[1]].actions : state[current].actions
   }
   return {
     service: state.iam.services.current,
     actions: current !== '' ? actions(current, split) : [],
     action: state.iam.actions.current
   }
 }

 const styles = theme => ({
   formControl: {
     minWidth: '100%'
   }
 })

 export default connect(mapStateToProps)(withStyles(styles)(Actions));
