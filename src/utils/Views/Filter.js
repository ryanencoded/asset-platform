import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import {
  withStyles
} from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  TextField,
  MenuItem,
  ListItemText,
  FormControl,
  InputLabel,
  Select,
  Checkbox,
  Chip,
  Input
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
/* Redux */
import { connect } from 'react-redux';
/* Custom Utils */
import { getFilterOptions } from 'data/constants/options'
import { saveFilterBy } from 'data/actions/utils'

class Filter extends Component {
  state ={
    category: 0,
    selectedOptions: ['Normal', 'Informational', 'Warning', 'Critical', 'Life Safety']
  }

  handleChange = event => {
    const selected = getFilterOptions(this.props.service)[event.target.value].options.map(x => x.label)
    this.setState({
      category: event.target.value,
      selectedOptions: selected
    })
    this.saveFilter(selected, event.target.value)
  }

  handleSelect = event => {
    //value is either from checked, or on delete from chip
    const  value  = event.target ? event.target.value : this.state.selectedOptions.filter(option => option !== event)
    //make array of all checked options
    let selected = []
    value.forEach(option => {
      if (this.state.selectedOptions.every(checked => checked !== value)) selected.push(option)
    })
    this.setState({
      selectedOptions: selected
    })
    this.saveFilter(selected, this.state.category);
  }

  saveFilter = (selected, index) => {
    //changing options inside of category object to reflect if selected or not
    const category = getFilterOptions(this.props.service)[index]
    let newFilter = category.options.map(option => {
      if (selected.includes(option.label)) {
        return { ...option, selected: true}
      }
      return {...option, selected: false}
    })
    newFilter = { ...category, options: newFilter }
    this.props.dispatch(saveFilterBy(this.props.service, newFilter))
  }

  render() {
    const { classes, service, filter } = this.props
    const options = getFilterOptions(service)
    return (
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            select
            fullWidth
            variant="outlined"
            label="Filter By"
            value={this.state.category}
            onChange={this.handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
          >
            {options.map((value, i) => (
              <MenuItem key={i} value={i}>
                <ListItemText primary={value.label} />
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={8}>
          <FormControl>
            <InputLabel htmlFor="filter-options">Options</InputLabel>
            <Select
              multiple
              value={this.state.selectedOptions}
              onChange={this.handleSelect}
              input={<Input id="filter-options" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip onDelete={() => this.handleSelect(value)} key={value} label={value} className={classes.chip} />
                  ))}
                </div>
              )}
            >
              {options[this.state.category].options.map((option, i) => (
                <MenuItem key={i} value={option.label}>
                  <Checkbox checked={this.state.selectedOptions.some(x => x === option.label)} />
                  <ListItemText primary={option.label} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    filter: state[props.service].filter
  }
}

const styles = theme => ({
  menu: {
    width: 200
  },
  chips: {
    display: 'flex',
  },
  chip: {
    margin: 2,
  }
})

export default connect(mapStateToProps)(withStyles(styles)(Filter))
