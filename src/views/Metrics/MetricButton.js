import React, { Component } from 'react';
/* Mui */
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  ButtonBase,
  Typography
} from '@material-ui/core';
import {
  grey
} from '@material-ui/core/colors';

class MetricButton extends Component {
  render() {
    const { label, reading, unit,  classes } = this.props;

    return (
      <ButtonBase focusRipple className={classes.button} focusVisibleClassName={classes.focusVisible}>
        <Grid container>
          <Grid item xs={9} align="left">
            <Typography component="span" variant="button" color="primary" className={classes.label}> {label} </Typography>
          </Grid>
          <Grid item xs={3} align="right">
            <Typography component="span" variant="button" color="secondary" className={classes.reading}>
              {typeof reading !== 'undefined' ? reading.substring(0, 5) : 'N/A'}
              {unit}
            </Typography>
          </Grid>
        </Grid>
      </ButtonBase>
    )
  }
}

const styles = theme => ({
  button: {
    margin: '5px',
    padding: '5px',
    width: '100%',
    height: '40px',
    borderRadius: '7px',
    border: 'solid 1px transparent',
    "&:hover": {
      backgroundColor: '#f2f3f9',
      border: 'solid 1px #bdc5f7'
    }
  },
  label: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  reading: {
    fontWeight: 'normal'
  }
});

export default withStyles(styles)(MetricButton)
