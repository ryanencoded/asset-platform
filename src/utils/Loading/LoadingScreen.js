import React, {
  Component
} from 'react';
import {
  withStyles
} from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  CircularProgress
} from '@material-ui/core';


class LoadingScreen extends Component {
  render() {
    const { classes, loading } = this.props;

    if (loading) {
      return (
        <Grid container alignItems="center" justify="center">
          <Typography align="center" gutterBottom>
            Getting our shit together
          </Typography>
          <CircularProgress className={classes.progress} />
        </Grid>
      )
    }else{
      if(this.props.children){
        return this.props.children
      }

      return null
    }
  }
};


const styles = theme => ({
  progress: {
    margin: theme.spacing(2),
  },
});

export default withStyles(styles)(LoadingScreen)
