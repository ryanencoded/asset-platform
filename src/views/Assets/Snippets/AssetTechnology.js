import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
/* Mui */
import {
  withStyles
} from '@material-ui/core/styles';
import {
  green,
  blue,
  purple
} from '@material-ui/core/colors';
import {
  Tooltip
} from '@material-ui/core';
/* Icons */
import GasIcon from '@material-ui/icons/Waves';
import LiquidIcon from '@material-ui/icons/Opacity';
import GeneratorIcon from '@material-ui/icons/OfflineBolt';
import UnknownIcon from '@material-ui/icons/Help';

class AssetTechnology extends PureComponent {

  getIcon = (artifact) => {
    const { classes, className } = this.props;
    switch(artifact) {
      case 'power-generator':
        return <GeneratorIcon className={classNames(classes[artifact], className)}/>;
      case 'liquid-level':
        return <LiquidIcon className={classNames(classes[artifact], className)}/>;
      case 'gas-detection':
        return <GasIcon className={classNames(classes[artifact], className)}/>;
      default:
        return <UnknownIcon />;
    }
  }

  render() {
    const { technology } = this.props;
    const artifact = typeof technology == 'object' && technology.artifact ? technology.artifact : 'unknown'
    const label = typeof technology == 'object' && technology.label ? technology.label : 'Unknown'

    return(
      <Tooltip title={label} aria-label={label}>
        {this.getIcon(artifact)}
      </Tooltip>
    )
  }
}

AssetTechnology.propTypes = {
  classes: PropTypes.object.isRequired,
  technology: PropTypes.shape({
    label: PropTypes.oneOf(['Gas Detection', 'Liquid Level', 'Power Generator']),
    artifact: PropTypes.oneOf(['gas-detection', 'liquid-level', 'power-generator'])
  }).isRequired
};

const styles = theme => ({
  "gas-detection": {
    color: green[300]
  },
  "liquid-level": {
    color: blue[300]
  },
  "power-generator" : {
    color: purple[300]
  }
})

export default withStyles(styles)(AssetTechnology);
