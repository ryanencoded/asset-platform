import React from 'react'
import { withRouter, Route, Redirect } from 'react-router-dom';
import { Transition } from 'react-spring/renderprops'
/* Redux & Actions */
import { connect } from 'react-redux';
import { currentUser } from 'data/actions/authentication';

class PrivateRoute extends React.Component {
  state = {
    loaded: false,
    isAuthenticated: this.props.isAuthenticated
  }

  componentDidMount() {

    if(!this.props.isAuthenticated){
      this.props.dispatch(currentUser());
    }

    this.unlisten = this.props.history.listen(() => {
      this.props.dispatch(currentUser());
    });
  }

  componentWillUnmount() {
    this.unlisten()
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.isAuthenticated === nextProps.isAuthenticated){
      return false
    }

    return true;
  }

  render() {
    const { isAuthenticated, component: Component, ...rest } = this.props
    return (

        <Route
          {...rest}
          render={props => {
            return isAuthenticated ? (
              <Transition
                native
                items={props.location}
                keys={props.location.pathname}
                from={{ transform: 'translateX(100px)', opacity: 0 }}
                enter={{ transform: 'translateX(0px)', opacity: 1 }}
                leave={{ transform: 'translateX(100px)', opacity: 0 }}>
                {location => style => (
                  <Component {...props} style={style} />
                )}
              </Transition>
            ) : (
              <Redirect to={{
                  pathname: "/auth/login",
                  state: { from: props.location }
              }} />
            )
          }}
        />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated
  }
}

export default withRouter(connect(mapStateToProps)(PrivateRoute))
