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
                  name="signup"
                  to="/signup"
                  className="list-group-item list-group-item-action active list-group-item-success"
                  id="list-home-list"
                  data-toggle="list"
                  role="tab"
                  aria-controls="home"
                >
                  SIGN UP
                </Link>
              </div>
            )}
            {loggedIn && (
              <div>
                <Link
                key="Vessels"
                name="Vessels"
                to={{
                  pathname: "/swinfo/vessel",
                  state: {
                    resources: 'starships',
                  },
                }}
                className="list-group-item list-group-item-action active list-group-item-success"
                id="list-home-list"
                data-toggle="list"
                role="tab"
                aria-controls="home"
                >
                Vessels
                </Link>
                <Link
                key="Planets"
                name="Planets"
                to={{
                  pathname: "/swinfo/planets",
                  state: {
                    resources: 'planets',
                  },
                }}
                className="list-group-item list-group-item-action active list-group-item-success"
                id="list-home-list"
                data-toggle="list"
                role="tab"
                aria-controls="home"
                >
                Planets
                </Link>
                <Link
                key="films"
                name="films"
                to={{
                  pathname: "/swinfo/films",
                  state: {
                    resources: 'films',
                  },
                }}
                className="list-group-item list-group-item-action active list-group-item-success"
                id="list-home-list"
                data-toggle="list"
                role="tab"
                aria-controls="home"
                >
                Films
                </Link>
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
              </div>
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
