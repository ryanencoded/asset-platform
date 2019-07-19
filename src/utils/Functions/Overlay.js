import React, { Component } from 'react'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
// Show something on top of other
class Overlay extends Component {
  render() {

    const { classes, children, className } = this.props

    return (
      <div className={classes.container}>
          <div className={classNames(classes.overlay, className)}>
            {children}
          </div>
      </div>
    )
  }
}

const styles = theme => ({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    position: 'relative',
    zIndex: 1000
  },
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
  }
})

export default withStyles(styles)(Overlay)
