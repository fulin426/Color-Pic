import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { logoutUser } from '../actions/authActions';

class Logout extends Component {
  logout(event) {
    event.preventDefault();
    this.props.logoutUser();
  }

  render() {
    return(
      <div>
        <p style={{'display': 'inline-block'}}>{this.props.email}</p>
        <Button style={{'display': 'inline-block'}} onClick={event => this.logout(event)}>
          Log Out
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.auth.isAuthenticated);
  return {
    Authenticated: state.auth.isAuthenticated,
    email: state.auth.user.email
  };
};

export default connect(mapStateToProps, { logoutUser })(Logout);
