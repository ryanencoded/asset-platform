import React, { Component } from 'react'
import {
  withRouter,
  Route
} from 'react-router-dom';
/* Mui */
import {
  Grid
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
/* Redux & Actions */
import { connect } from 'react-redux'
import { fetchAssets } from 'data/actions/assets'
/* Custom Utils */
import { filtSortSelector } from 'data/reducers/utils'
import PrivateRoute from 'utils/Auth/PrivateRoute';
/* View Snippets */
import AssetCard from 'views/Assets/Snippets/AssetCard'
/* View Route Components */
import AssetDetail from 'views/Assets/AssetDetail'

class AssetsGrid extends Component {
  state = {
    assets: this.props.assets
  }

  componentWillReceiveProps= (nextProps) => {
    this.setState({
      assets: nextProps.assets
    })
  }

  render() {
    const { match } = this.props
    const { assets } = this.state
    const desired = 4
    let list = []

    return (
      <div>
        <Grid container spacing={2} justify="center">
          {assets.map((asset, i, c) => {
              list.push(`${match.path}/detail/${asset.artifact}`)

              const card = (
                <Grid key={asset.artifact} item xs={12} sm={6} md={4} lg={3}>
                  <AssetCard asset={asset} />
                </Grid>
              )
              if(i % desired == 3 || (i == assets.length - 1)){
                const routes = list.map((path) => (
                  <Grid key={path} item xs={12}>
                    <Route path={path} component={AssetDetail}/>
                  </Grid>
                ))
                list.length = 0
                return[ card, routes ]
              }else{
                return card
              }
          })}
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    assets: state.asset.data,
    sort: state.asset.sort,
    filter: state.asset.filter
  }
}


export default withRouter(connect(mapStateToProps)(AssetsGrid));
