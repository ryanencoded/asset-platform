import React, { Component } from 'react';
import {
  withRouter
} from 'react-router-dom';
/* Animation */
import { animated } from 'react-spring/renderprops'
/* Mui */
import {
  Grid
} from '@material-ui/core';
/* Redux & Actions */
import { connect } from 'react-redux';
/* Custom Utils */
import SectionHeader from 'utils/Views/SectionHeader';
import ToggleView from 'utils/Functions/ToggleView';
import Sort from 'utils/Views/Sort';
import Filter from 'utils/Views/Filter'
/* View Components */
import AssetsList from 'views/Assets/AssetsList';
import AssetsGrid from 'views/Assets/AssetsGrid';

class Assets extends Component {

  render() {
    const { style } = this.props;
    return (
      <animated.div style={{ ...style }}>
        <Grid container justify="space-between" spacing={2}>
          <Grid item xs={12} sm={2}>
            <SectionHeader
              title="Assets"
              subtitle=""
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Sort service='asset'/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Filter service='asset'/>
          </Grid>
          <Grid item xs={12} sm={2}>
            <ToggleView />
          </Grid>
        </Grid>
        <div>
            { this.props.list ? <AssetsList /> : <AssetsGrid />}
        </div>
      </animated.div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.util.list,
    sort: state.asset.sort
  }
}

export default withRouter(connect(mapStateToProps)(Assets));
