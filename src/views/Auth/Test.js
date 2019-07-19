import React from 'react';
import { Auth } from 'aws-amplify';
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import CopyToClipboard from 'utils/CopyToClipboard/CopyToClipboard';

const styles = theme => ({
  root: {
    margin: "10px",
    color: theme.typography.body1.color
  }
});

class LoginTest extends React.Component {

  state = {
    username: '',
    name: '',
    auth: {
      AccessKeyId: '',
      SecretKey: '',
      SessionToken: ''
    },
    loading: true
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  getCurrentAuth = async () => {
    const auth = await Auth.currentCredentials();
    const user = await Auth.currentUserInfo();

    this.setState({
      auth: auth.data.Credentials,
      username: user.username,
      name: user.attributes.name,
      loading: false
    })
  }

  componentDidMount() {
    this.getCurrentAuth();
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
          <Paper>
            <h4>Access Key</h4>
            <CopyToClipboard text={this.state.auth.AccessKeyId} />

            <h4>Secret Key</h4>
            <CopyToClipboard text={this.state.auth.SecretKey} />

            <h4>Session Token</h4>
            <CopyToClipboard text={this.state.auth.SessionToken} />
          </Paper>
      </div>
    )
  }
}



export default withRouter(withStyles(styles)(LoginTest));
