import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../actions/authorization";

class NavBar extends Component {

  handleLogoutClick = () => {
    this.props.logOut();
  };

  render() {
    const { loggedIn } = this.props.auth;

    return(
      <div className="col-md-12 col-sm-12 col-log-12">
        <div className="d-flex flex-row w-100">
          <div className="list-group" id="list-tab" role="tablist">
            <Link
              to="/"
              className="list-group-item list-group-item-action active list-group-item-success"
              id="list-home-list"
              data-toggle="list"
              role="tab"
              aria-controls="home"
            >
              HOME
            </Link>
            {!loggedIn && (
              <div>
                <Link
                  name="login"
                  to="/login"
                  className="list-group-item list-group-item-action active list-group-item-success"
                  id="list-home-list"
                  data-toggle="list"
                  role="tab"
                  aria-controls="home"
                >
                  LOG IN
                </Link>
                <Link
                  name="registration"
                  to="/registration"
                  className="list-group-item list-group-item-action active list-group-item-success"
                  id="list-home-list"
                  data-toggle="list"
                  role="tab"
                  aria-controls="home"
                >
                  Sign
                </Link>
              </div>
            )}
            {loggedIn && (
              <Link
              name="logout"
              onClick={this.handleLogoutClick}
              to="/login"
              className="list-group-item list-group-item-action active list-group-item-success"
              id="list-home-list"
              data-toggle="list"
              role="tab"
              aria-controls="home"
            >
              LOG OUT
            </Link>
            )}
          </div>
        </div>
      </div>
    ) 
  } 
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, { logOut })(withRouter(NavBar));
