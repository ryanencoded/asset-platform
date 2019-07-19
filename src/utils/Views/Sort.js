import React, {
  Component
} from 'react';
/* Mui */
import {
  withStyles
} from '@material-ui/core/styles';
import {
  Grid,
  TextField,
  Checkbox,
  Chip,
  MenuItem,
  ListItemText
} from '@material-ui/core';
/* Redux */
import { connect } from 'react-redux';
/* Custom Utils */
import { getSortOptions } from 'data/constants/options'
import { saveSortBy } from 'data/actions/utils'

class Sort extends Component {
  handleChange = event => {
    this.props.dispatch(saveSortBy(this.props.service, {
      artifact: event.target.value.toLowerCase(),
      label: event.target.value
    }))
  }

  render() {
    const { classes, service, sort } = this.props
    const options = getSortOptions(service)
    return (
      <div>
        <TextField
          select
          fullWidth
          id="sort-label"
          variant="outlined"
          label="Sort By"
          className={classes.textField}
          value={sort.label}
          onChange={this.handleChange}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
        >
          {options.map((value, i) => (
            <MenuItem key={i} value={value.label}>
              <ListItemText primary={value.label} />
            </MenuItem>
          ))}
        </TextField>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    sort: state[props.service].sort
  }
}

const styles = theme => ({
  menu: {
    width: 200
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  }
})

export default connect(mapStateToProps)(withStyles(styles)(Sort))
