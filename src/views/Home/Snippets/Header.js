import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
/* Mui */
import {
  Grid,
  Typography,
  Paper,
  Card,
  CardHeader,
  CardContent,
  BottomNavigation,
  BottomNavigationAction
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import { deepPurple, grey } from '@material-ui/core/colors'
/* Redux & Actions */
import { connect } from 'react-redux'
/* Snippets */
import AssetOverview from 'views/Assets/Snippets/AssetOverview'

class Header extends Component {
  render() {
    const { classes, assets } = this.props
    const date = new Date()
    const today = (date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear()
    return(
      <Card raised className={classes.card} color="primary">
        <CardHeader
          align="center"
          title="Welcome back,"
          subheader={this.props.name}
          classes={{title: classes.title, subheader: classes.subheader}}/>
        <CardContent>
          <Typography align="center" className={classes.title}>{today}</Typography>
        </CardContent>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: state.user.name,
    assets: state.assets.data
  }
}

const styles = theme =>  ({
  card: {
    minWidth: 500,
    minHeight: 150,
    backgroundColor: deepPurple[500],
    borderRadius: "10px",
    marginBottom: "1rem"
  },
  container: {
    marginTop: '1.5rem',
    width: '100%'
  },
  subheader: {
    fontSize: '2em',
    color: grey[300]
  },
  title: {
    fontSize: '1em',
    color: grey[300]
  },
})

export default withRouter(connect(mapStateToProps)(withStyles(styles)(Header)));
