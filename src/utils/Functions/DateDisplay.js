import React from 'react'
import PropTypes from 'prop-types';
import {
  withStyles
} from '@material-ui/core/styles';
import {
  grey
} from '@material-ui/core/colors';
import moment from 'moment';


class DateDisplay extends React.Component {

  render() {

    const {
      classes,
      date,
      title = ''
    } = this.props;

    let formatedDate = moment(date).from()

    return (
      <span>
        {title} {formatedDate}
      </span>
    );

  }
}

DateDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
  date: PropTypes.number.isRequired
};

const styles = theme => ({
  date: {
    color: grey[300]
  }
});

export default withStyles(styles)(DateDisplay);
