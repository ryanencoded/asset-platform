import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';
/* Mui */
import { withStyles } from '@material-ui/core/styles';
import {
  deepPurple,
  grey
} from '@material-ui/core/colors'
import { TextField, InputAdornment, Tooltip } from '@material-ui/core';
/* Icons */
import CheckIcon from '@material-ui/icons/CheckCircle';
/* Custom Utils */
import { validateInput } from 'utils/Functions/validate';

class ValidateInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      validated: false,
      message: '',
      original: this.props.original,
      value: this.props.value
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let value = nextProps.value
    if (nextProps.type === 'phone'){
      value = nextProps.value.replace(/[^0-9|+]+/g, '')
    }
    if (value !== prevState.value || nextProps.original !== prevState.original){
      return {
        value,
        original: nextProps.original
      }
    }
    return null
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value || prevState.original !== this.state.original){
      this.validate()
    }
  }

  validate = () => {
    if(this.state.value !== '' && this.state.value.length > 1){
      let {status : validated, message} = validateInput(this.props.type, this.state.value)

      if(this.state.original === this.state.value){
        validated = false
      }

      if(this.props.match){
        if(this.state.value !== this.props.match){
          validated = false
          message = `${this.props.label} does not match`
        }
      }

      this.setState({
        validated: validated,
        message: message
      })
    }else{
      this.setState({
        validated: false,
        message: ''
      })
    }
  }

  render() {
    const { classes, InputProps = {}, ...props } = this.props;

    const endAdornment = (
      <InputAdornment className={this.state.validated ? classes.validated : classes.error } position="end">
        <Tooltip title={this.state.validated ? "Valid" : "Invalid" } aria-label={this.state.validated ? "Valid" : "Invalid" }>
          <CheckIcon />
        </Tooltip>
      </InputAdornment>
    )

    if(InputProps.startAdornment){
      const styledStartAdornment = React.cloneElement(
        InputProps.startAdornment,
        { className: this.state.validated ? classes.validated : classes.error }
      )

      InputProps.startAdornment = styledStartAdornment
      InputProps.endAdornment = endAdornment
    }

    if(!InputProps.endAdornment){
      InputProps.endAdornment = endAdornment
    }

    if(this.props.mask){
      return (
        <InputMask
          {...props}
          onKeyUp={this.validate}
          InputProps={InputProps}
        >
          {(inputProps) =>
            <TextField
              {...inputProps}
              error={this.state.message.length > 0 ? true : false}
              helperText={this.state.message}
            />
          }
        </InputMask>
      )
    }

    return (
        <TextField
          {...props}
          InputProps={InputProps}
          onKeyUp={this.validate}
          error={this.state.message.length > 0 ? true : false}
          helperText={this.state.message}
        />
    );
  }
}

ValidateInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired
};

const styles = theme => ({
  validated: {
    color: deepPurple[500],
    cursor: 'pointer'
  },
  error: {
    color: grey[200],
    pointerEvents: 'none'
  }
});

export default withStyles(styles)(ValidateInput);
