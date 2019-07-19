import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '@material-ui/core';

class TooltipIcon extends PureComponent {
  render() {
    const { text, icon } = this.props;

    return (
      <Tooltip title={text} aria-label={text}>
          {icon}
      </Tooltip>
    );
  }
}

TooltipIcon.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired
};

export default (TooltipIcon);
