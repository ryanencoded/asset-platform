import React, { Component } from 'react'
/* Mui */
import { withStyles } from '@material-ui/core/styles'
import {
  Tabs,
  Tab,
} from '@material-ui/core'

class TabList extends Component {
  state = {
    value: 0
  }

  handleTabs = (event, value) => {
    this.setState({ value })
  }

  renderType = (type) => {
    switch(type) {
      case 'liquid-level':
        return (
          <Tabs
            value={this.state.value}
            onChange={this.handleTabs}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Water Tank" />
            <Tab label="Sewage Tank"/>
            <Tab label="Frac Tank" />
          </Tabs>
        )
      case 'gas-detection':
        return (
          <Tabs
            value={this.state.value}
            onChange={this.handleTabs}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="H2S" />
            <Tab label="LEL"/>
            <Tab label="CH4" />
            <Tab label="CO"/>
            <Tab label="O2" />
          </Tabs>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <>
        {this.renderType(this.props.type)}
      </>
    )
  }
}

export default TabList
