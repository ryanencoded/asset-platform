import React, { Component } from 'react';
import classNames from 'classnames';
import {
  withRouter,
  Route,
  Link
} from 'react-router-dom';
/* Mui */
import { withStyles } from '@material-ui/core/styles';
import {
  deepPurple
} from '@material-ui/core/colors';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Typography
} from '@material-ui/core';
/* Redux & Actions */
import { connect } from 'react-redux';
/* Custom Utils */
import StateIndicator from 'utils/Views/StateIndicator';
import DateDisplay from 'utils/Functions/DateDisplay'
import { filtSortSelector } from 'data/reducers/utils'
/* View Snippets */
import AssetTechnology from 'views/Assets/Snippets/AssetTechnology';
import AlertCount from 'views/Alerts/Snippets/AlertCount';
import AssetDetail from 'views/Assets/AssetDetail'

class AssetsList extends Component {

  state = {
    assets: this.props.assets
  }

  componentWillReceiveProps= (nextProps) => {
    this.setState({
      assets: nextProps.assets
    })
  }

  checkRoute = (asset) => {
    const path = this.props.location.pathname
    return path.includes(`/assets/detail/${asset}`) ? true : false
  }

  render() {
    const { classes, match } = this.props
    const { assets } = this.state
    return (
      <Table>
        <TableHead>
          <TableRow>
          <TableCell className={classes.firstCell}/>
          <TableCell align="left">Asset Name</TableCell>
          <TableCell align="left">Asset Type</TableCell>
          <TableCell align="left">Alerts</TableCell>
          <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assets.map((asset, i) => {
            const row = (
              <TableRow key={i} >
                <TableCell align="left">
                  { this.checkRoute(asset.artifact)
                    ? <Button color="primary" variant="contained" component={Link} to={`/app/assets`}>Close</Button>
                    : <Button color="primary" variant="contained" component={Link} to={`${match.url}/detail/${asset.artifact}`}>Details</Button>
                  }
                </TableCell>
                <TableCell align="left">
                    <Typography variant="subtitle1" className={classes.primaryText}>
                        {asset.label}
                    </Typography>
                    <Typography variant="subtitle1" className={classes.secondaryText}>
                      Site: {asset.assignment.site}
                    </Typography>
                </TableCell>
                <TableCell align="left">
                  <AssetTechnology technology={asset.technology} label={asset.technology.label} />
                </TableCell>
                <TableCell align="left">
                  <AlertCount asset={asset.artifact} />
                </TableCell>
                <TableCell align="left">
                  <Typography variant="subtitle1" className={classes.primaryText}>
                      <StateIndicator description state={asset.state} />
                  </Typography>
                  <Typography variant="subtitle1" className={classes.secondaryText}>
                    {asset.online
                      ? <DateDisplay date={asset.updatedAt ? asset.updatedAt : asset.updatedAt} title="Last Updated:"/>
                      : 'Offline'
                    }
                  </Typography>
                </TableCell>
              </TableRow>
            )

            const route = (
              <TableRow className={classes.route} key={`${match.path}/detail/${asset.artifact}`}>
                <TableCell colSpan={5}>
                  <Route path={`${match.path}/detail/${asset.artifact}`} component={AssetDetail}/>
                </TableCell>
              </TableRow>
            )
            return [row, route]
          })}
        </TableBody>
    </Table>
    )
  }
}


const mapStateToProps = state => {
  return {
    assets: filtSortSelector(state, 'asset'),
    asset: state.asset.current,
    sort: state.asset.sort,
    filter: state.asset.filter
  }
}

const styles = theme => ({
  route: {
    backgroundColor: 'transparent',
    height: 'auto',
    "&:hover": {
      transition: 'none',
      boxShadow: 'none',
      cursor: 'auto'
    },
    "& > td":{
      border: 'none',
      padding: '0',
      "&:last-child": {
        padding: '0'
      }
    }
  },
  primaryText: {
    fontSize: 18,
    color: "#686868"
  },
  secondaryText: {
    fontSize: 15,
    color: "#686868"
  }
});


export default withRouter(connect(mapStateToProps)(withStyles(styles)(AssetsList)));
