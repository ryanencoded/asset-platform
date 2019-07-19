import React, { PureComponent } from 'react';
/* Mui */
import {
  Grid,
  Typography,
  List,
  ListItemText
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
/* Redux & Actions */
import { connect } from 'react-redux'
import { fetchAlerts } from 'data/actions/alerts'

/* View Snippets */
import StateIndicator from 'utils/Views/StateIndicator';


class AssetAlerts extends PureComponent {

 componentDidMount() {
   this.props.dispatch(fetchAlerts())
 }

 render() {
   const { classes, asset, alerts } = this.props
   //Filter the alert list to this asset
   const currentAlerts = alerts.filter((alert) => alert.asset.artifact == asset)

   return(
     <div className={classes.root}>
       { currentAlerts.length !== 0 ?
         <div className={classes.box}>
            <Typography color="primary" variant="subtitle1" className={classes.box}>Alerts</Typography>
            {currentAlerts.map((alert, i) => (
              <List key={i}>
                <ListItemText
                  primary={<StateIndicator description state={alert.state} />}
                  secondary={`Actual: ${alert.actual} Expected: ${alert.expected}`}>
                </ListItemText>
              </List>
            ))}
         </div> : <Typography align="center" color="primary"> No Current Alerts </Typography>
       }
     </div>
   )
 }
}

const mapStateToProps = (state, props) => {
  return {
    alerts: state.alert.data.filter((alert) => alert.asset.artifact == props.asset)
  }
}

const styles = theme => ({
  root: {
    height: "330px",
    overflowY: "scroll"
  },
  box: {
    padding: '0 2rem'
  }
});

export default connect(mapStateToProps)(withStyles(styles)(AssetAlerts));
