import React from 'react';
/* Mui */
import { withStyles } from '@material-ui/core/styles';
import { Grid, Hidden } from '@material-ui/core';
/* Logo */
import Logo from 'utils/logo.png';

const Marketing = (props) => {
  const { classes } = props
  return (
      <Grid container className={classes.container}>
        <Hidden mdDown>
          <Grid item xs={12} >
            <img className={classes.logo} src={Logo} alt="Logo"/>
          </Grid>
          <Grid item xs={12}>
            <p className={classes.text}>
              Lorem ipsum dolor <b> sit amet, consectetur </b>
            </p>
          </Grid>
        </Hidden>
      </Grid>

  )
};

const styles = theme => ({
  container: {
    backgroundImage: 'linear-gradient(rgb(68,11,90), rgb(110,1,89))',
    padding:'5%',
    height: '100vh',
    [theme.breakpoints.down('md')]: {
      height: "100%",
    }
  },
  text: {
    width: '50%',
    fontSize: '40px',
    color:'white',
    alignSelf:'center'
  },
  logo: {
    maxWidth: '150px'
  }
});

export default (withStyles(styles)(Marketing));
