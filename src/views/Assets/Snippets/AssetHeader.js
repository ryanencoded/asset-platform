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
  Grid,
  Typography,
  IconButton,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@material-ui/core';
/* Custom Utils */
import StateIndicator from 'utils/Views/StateIndicator'
import DateDisplay from 'utils/Functions/DateDisplay'
/* View Snippets */
import AssetTechnology from 'views/Assets/Snippets/AssetTechnology'

class AssetHeader extends PureComponent {
  formatRuntime = (runtime) => {
    if(!runtime) return 'Not Available'

    runtime = runtime.replace(/\W/g, ':')
    const [hlabel,htime,mlabel,mtime] = runtime.split(':')
    return `${htime} ${hlabel} ${mtime} ${mlabel}`
  }

  render() {
    const { asset, classes } = this.props;

    return(
      <Grid container justify="center" alignItems="center">
        <Grid item sm={6} md={3}>
          <List disablePadding>
            <ListItem disableGutters>
              <ListItemIcon>
                <AssetTechnology technology={asset.technology} className={classes.technology}/>
              </ListItemIcon>
              <ListItemText primary={asset.label} secondary={`${asset.assignment.region} - ${asset.assignment.site}`} />
            </ListItem>
          </List>
        </Grid>
        <Grid item sm={6} md={3}>
          <Typography variant="subtitle1" className={classes.primaryText}>
            <StateIndicator state={asset.state} description size={25}/>
          </Typography>
          <Typography variant="subtitle1" className={classes.secondaryText}>
            Overall Status
          </Typography>
        </Grid>
        <Grid item sm={6} md={3}>
          <Typography variant="subtitle1" className={classes.primaryText}>
            {this.formatRuntime(asset.runtime)}
          </Typography>
          <Typography variant="subtitle1" className={classes.secondaryText}>
            Uptime
          </Typography>
        </Grid>
        <Grid item sm={6} md={3}>
          <Typography variant="subtitle1" className={classes.primaryText}>
            {asset.online ? 'Online' : 'Offline'}
          </Typography>
          <Typography variant="subtitle1" className={classes.secondaryText}>
            <DateDisplay date={asset.updatedAt ? asset.updatedAt : asset.createdAt} title="Last Updated:"/>
          </Typography>
        </Grid>
      </Grid>
    )
  }
}

AssetHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  technology: {
    fontSize: '3rem'
  },
  primaryText: {
    fontSize: 20,
    color: "#686868"
  },
  secondaryText: {
    fontSize: 14,
    color: "#686868"
  }
})

export default withStyles(styles)(AssetHeader);
