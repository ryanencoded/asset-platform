import React, { Component } from 'react';
import {
  Link,
  withRouter
} from 'react-router-dom';
/* Animation */
import { Transition } from 'react-spring/renderprops'
/* Mui */
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from '@material-ui/core';
/* Redux & Actions */
import { connect } from 'react-redux';
import { fetchAlerts, clearAlert } from 'data/actions/alerts'
/* Custom Utils */
import StateIndicator from 'utils/Views/StateIndicator'
import { filtSortSelector } from 'data/reducers/utils'
import DateDisplay from 'utils/Functions/DateDisplay'
/* View Snippets */
import AssetTechnology from 'views/Assets/Snippets/AssetTechnology';

class AlertList extends Component {
  state = {
    alerts: this.props.alerts
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.alerts !== prevState.alerts) {
      return { alerts: nextProps.alerts}
    }
    return null
  }

  handleClear = (artifact) => {
    this.props.dispatch(clearAlert(artifact))
    const updated = this.state.alerts.filter(alert => alert.artifact !== artifact)
    this.setState({
      alerts: updated
    })
  }

  selectAlert = (artifact) => {
    this.props.history.push(`/app/assets/detail/${artifact}`)
  }

  componentDidMount() {
    this.props.dispatch(fetchAlerts())
  }

  render() {
    const { classes, limit, match } = this.props;
    const { alerts } = this.state
    const list = (limit ? alerts.slice(0, limit) : alerts)

    return (
          <div>
            { alerts.length !== 0 ?
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.firstCell}/>
                  <TableCell align="left">Asset Name</TableCell>
                  <TableCell align="left">Asset Type</TableCell>
                  <TableCell align="left">Description</TableCell>
                  <TableCell align="left">Priority</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  {list.map(alert => (
                    <TableRow key={alert.artifact}>
                      <TableCell align="left">
                        <Button color="primary" variant="contained" onClick={() => this.handleClear(alert.artifact)}>Clear</Button>
                      </TableCell>
                      <TableCell align="left">
                        <Typography variant='body1'>{alert.asset.label}</Typography>
                        <Typography variant='subtitle1'>Site: {alert.asset.site}</Typography>
                      </TableCell>
                      <TableCell align="left"><Typography variant='body1'><AssetTechnology technology={alert.asset.technology}/></Typography></TableCell>
                      <TableCell align="left"><Typography variant='body1'>{alert.message.body}</Typography></TableCell>
                      <TableCell align="left">
                        <StateIndicator state={alert.state} description={alert.state}/>
                        <Typography variant='subtitle1'><DateDisplay date={alert.createdAt} /></Typography>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
         : <Typography variant="body1" align="center" color="primary">No Current Alerts</Typography> }
       </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    alerts: filtSortSelector(state, 'alert'),
    sort: state.alert.sort,
    filter: state.alert.filter
  }
}

const styles = theme => ({
  firstCell: {
    width: '10%'
  }
});

export default withRouter(connect(mapStateToProps)(withStyles(styles)(AlertList)));
