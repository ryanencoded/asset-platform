import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Grid, Paper, Button, Typography} from '@material-ui/core';

function LazyLoader(props) {
  const { classes } = props;
  if (props.error) {
    return (
      <Grid container alignItems="center" justify="center">
        <Paper className={classes.root} elevation={1}>
          <Typography align="center" gutterBottom>
            We had some difficulty loading this. Please try again.
          </Typography>
          <Button variant="contained" className={classes.button} onClick={props.retry}>
            Try Again
          </Button>
        </Paper>
      </Grid>
    );
  } else if (props.timedOut) {
    return (
      <Grid container alignItems="center" justify="center">
        <Paper className={classes.root} elevation={1}>
          <Typography align="center" gutterBottom>
            This is taking forever...lets try again
          </Typography>
          <Button variant="contained" className={classes.button} onClick={props.retry}>
            Try Again
          </Button>
        </Paper>
      </Grid>
    )
  } else if (props.pastDelay) {
    return (
      <Grid container alignItems="center" justify="center">
        <Paper className={classes.root} elevation={1}>
          <CircularProgress className={classes.progress} />
        </Paper>
      </Grid>
    )
  } else {
    return null;
  }
}

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    marginTop: theme.spacing(10)
  },
  progress: {
    margin: theme.spacing(2),
  }
});

export default withStyles(styles)(LazyLoader);
