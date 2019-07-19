import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Snackbar } from '@material-ui/core';

class SnackbarDisplay extends PureComponent {

  render() {

    const { heading, open } = this.props;

    return (
      <Snackbar
        anchorOrigin={{ vertical:'top', horizontal:'center' }}
        open={open}
        onClose={this.props.handleSnackbarClose}
        autoHideDuration={2000}
        ContentProps={{
          'aria-describedby': 'message',
        }}
        message={<span id="message">{heading}</span>}
      />
    );
  }
}

SnackbarDisplay.propTypes = {
  open: PropTypes.bool.isRequired,
  heading: PropTypes.string.isRequired,
};

export default SnackbarDisplay;
