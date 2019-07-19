import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
/* Mui */
import {
  withStyles
} from '@material-ui/core/styles';
import {
  deepPurple,
  grey
} from '@material-ui/core/colors'
import { Typography } from '@material-ui/core';

class SectionHeader extends PureComponent {
  render() {
    const { classes, title, subtitle } = this.props;

    return (
      <div className={classes.sectionHeader}>
        <Typography variant="h6" className={classes.title}>{title}</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>{subtitle}</Typography>
      </div>
    );
  }
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

const styles = ({
  sectionHeader: {
    margin: '0 0 15px 0'
  },
  title:{
    color: deepPurple[500]
  },
  subtitle: {
    color: grey[700]
  }
});

export default withStyles(styles)(SectionHeader);
