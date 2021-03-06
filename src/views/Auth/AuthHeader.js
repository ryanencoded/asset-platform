import React from 'react';
/* Mui */
import {
  withStyles
} from '@material-ui/core/styles';
/* Logo */
import Logo from 'utils/logo.png';

const AuthHeader = (props) => {
  const { classes } = props
  return (
    <div className={classes.imageContainer}>
      <img className={classes.image} src={Logo} alt='Company Logo'/>
    </div>
  )
};

const styles = theme => ({
  image: {
    margin: '10% auto',
    maxWidth: '150px'
  },
  imageContainer: {
    textAlign: 'center'
  }
});

export default withStyles(styles)(AuthHeader);
