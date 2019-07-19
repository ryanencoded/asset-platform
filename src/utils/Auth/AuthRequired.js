import  React, { Component } from 'react'
/* Redux & Actions */
import { connect } from 'react-redux'
import { showMessage } from 'data/actions/utils'
import { fetchActions } from 'data/actions/iam'

class AuthRequired extends Component {
  state = {
    authorized: false,
  }

  componentDidMount() {
    this.props.dispatch(fetchActions(this.props.service))
    this.checkAuthorization(this.props.actions)
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.compareArrays(prevProps.actions, this.props.actions) === true) {
      this.checkAuthorization(this.props.actions)
    }
  }

  compareArrays = (prev, next) => {
    const arraysAreDiff = prev.some((object, i) => {
      return object.available !== next[i].available
    })
    return arraysAreDiff
  }

  checkAuthorization = (actions) => {
    let authorized = actions.some(item => item.artifact === this.props.action && item.available === true)
    this.setState({
      authorized
    })
  }

  render() {
    return this.state.authorized ? this.props.children : null
  }
}

const mapStateToProps = (state, props) => {
  return {
    actions: state[props.service].actions
  }
}

export default connect(mapStateToProps)(AuthRequired);
