import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  Tooltip
} from '@material-ui/core';
import {
  teal,
  red,
  yellow,
  grey,
  blue
} from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';

import IndicatorIcon from '@material-ui/icons/Lens';

class StateIndicator extends PureComponent {
  render () {
    const { classes, state, description = false, size = 15 } = this.props;
    const artifact = state && state.artifact ? state.artifact : 'unknown'
    const label = state && state.label ? state.label : 'Unknown'

    const styles = {
      "height": size,
      "width": size
    }

    return(
      <span>
        <Tooltip placement="top" title={label} aria-label={label}>
          <IndicatorIcon className={classNames(classes[artifact], classes.icon)} style={styles}/>
        </Tooltip>
        {description && <span className={classes.text}>{label}</span>}
      </span>
    )
  }
}

StateIndicator.propTypes = {
  classes: PropTypes.object.isRequired,
  state: PropTypes.shape({
    label: PropTypes.oneOf(['Normal', 'Informational', 'Warning', 'Critical', 'Life Safety']),
    artifact: PropTypes.oneOf(['normal', 'informational', 'warning', 'critical', 'life-safety'])
  }).isRequired
};

const indicatorStyles = theme => ({
  "normal": {
    "color": teal[300]
  },
  "informational": {
    "color": blue[300]
  },
  "critical": {
    "color": red[300]
  },
  "warning": {
    "color": yellow[300]
  },
  "text": {
    "padding": "0px 5px"
  },
  "icon": {
    "vertical-align": "text-top"
  }
});


export default withStyles(indicatorStyles)(StateIndicator);
