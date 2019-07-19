import React, { PureComponent } from 'react';
import classNames from 'classnames';
/* Mui */
import { withStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors'
import { IconButton } from '@material-ui/core';
/* Icons */
import GridIcon from '@material-ui/icons/ViewModule';
import ListIcon from '@material-ui/icons/ViewHeadline';
/* Redux & Actions */
import { connect } from 'react-redux';
import { toggleView } from 'data/actions/utils';

class ToggleView extends PureComponent {

  toggleView = () => {
    this.props.dispatch(toggleView(!this.props.list))
  }

  render() {
    const { classes, list } = this.props;

    return (
      <div className={classes.root}>
        <IconButton className={classNames({ [classes.active]: !list })} onClick={this.toggleView} >
          <GridIcon />
        </IconButton>
        <IconButton className={classNames({ [classes.active]: list })} onClick={this.toggleView}>
          <ListIcon />
        </IconButton>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.util.list
  }
}

const styles = ({
  root:{
    padding: '3px 4px',
    textAlign: 'right'
  },
  active: {
    color: deepPurple[500]
  }
});

export default connect(mapStateToProps)(withStyles(styles)(ToggleView));
