import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    const { loggedIn, user } = this.props.auth;
    return (
      <div>
        {!loggedIn && (
          <p>
            Routes are protected. You need to login first
          </p>
        )}

        {loggedIn && (
          <p>
            Welcome <strong>{user.username}</strong>
          </p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Home);
