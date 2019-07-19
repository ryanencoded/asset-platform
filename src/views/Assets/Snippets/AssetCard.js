import React, { Component } from 'react';
import classNames from 'classnames';
import {
  Link,
  withRouter
} from 'react-router-dom';
/* Mui */
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardHeader,
  CardActionArea,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Typography
} from '@material-ui/core';
/* Redux & Actions */
import { connect } from 'react-redux'
import { fetchMetrics } from 'data/actions/metrics'
/* Custom Utils */
import StateIndicator from 'utils/Views/StateIndicator'
import DateDisplay from 'utils/Functions/DateDisplay'
import Overlay from 'utils/Functions/Overlay'
import FusionChart from 'utils/DataViews/FusionChart'
import NotificationButton from 'utils/Views/NotificationButton'
/* View Snippets */
import AssetTechnology from 'views/Assets/Snippets/AssetTechnology'

class AssetCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      hover: false
    }
  }

  componentDidMount(){
    const { asset } = this.props
    this.props.dispatch(fetchMetrics(asset.artifact))
  }

  handleMouseEnter = () => {
    this.setState({
      hover: true
    })
  }

  handleMouseLeave = () => {
    this.setState({
      hover: false
    })
  }

  render() {
    const { hover } = this.state
    const { asset, metrics, alerts, classes, match } = this.props;

    const textHover = classNames({ [classes.textHover] : this.state.hover })
    const headerClasses = {
      "title": textHover,
      "subheader": textHover,
      "action": textHover
    }

    return (
      <div>
        <Card
          className={classNames(classes.card, { [classes.cardHover] : this.state.hover })}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <CardHeader
            avatar={<AssetTechnology technology={asset.technology}  className={textHover} />}
            action={<NotificationButton className={textHover} count={alerts.length} />}
            title={asset.label}
            subheader={<StateIndicator state={asset.state} description />}
            classes={headerClasses}
          />

        <CardContent classes={{ root: classes.content }}>

            {hover &&
              <Overlay>
                <div className={classes.buttonArea}>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justify="center"
                  spacing={2}
                >
                  <Grid item>
                    <Button variant="contained" className={classes.button} component={Link} to={`${match.url}/detail/${asset.artifact}`}>Details</Button>
                  </Grid>
                </Grid>
                </div>
              </Overlay>
            }

            <Grid container direction="column" alignItems="center" justify="center">
              <Grid item xs={12}>
                <FusionChart className={classNames({ [classes.chartHover] : this.state.hover })} metric={metrics[0]} />
              </Grid>
              <Grid item xs={12}>
                <Typography className={classNames(classes.dateDisplay, textHover)}>Last Updated: <DateDisplay date={asset.updatedAt ? asset.updatedAt : asset.createdAt} /></Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <div className={classes.arrow}></div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const metrics = state.metric[props.asset.artifact] ? state.metric[props.asset.artifact] : []
  return {
    metrics: metrics,
    alerts: state.alert.data.filter((alert) => alert.asset.artifact == props.asset.artifact)
  }
}

const styles = theme => ({
  card: {
    minWidth: '270px',
    minHeight: '260px'
  },
  content: {
    "&:last-child": {
      padding: '20px 20px 4px 20px'
    }
  },
  button: {
    backgroundColor: '#ffffff',
    color: '#626262',
    width: "149px",
    height: "40px",
    borderRadius: "2px",
  },
  buttonArea: {
    height: '100%'
  },
  cardHover: {
    "background": "linear-gradient(142deg, rgba(133, 8, 62, 0.8), rgba(105, 26, 184, 0.8))",
    "color": "#FFFFFF"
  },
  textHover: {
    "color": "#FFFFFF"
  },
  chartHover: {
    opacity: '0.5'
  },
  dateDisplay: {
    padding: '10px 0 0 0',
  },
  noChart: {
    paddingTop: '20%',
    height: '200px'
  }
});

export default connect(mapStateToProps)(withRouter(withStyles(styles)(AssetCard)));
