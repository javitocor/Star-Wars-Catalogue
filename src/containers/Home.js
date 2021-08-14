import React, { Component } from "react";
import { connect } from "react-redux";
import home from '../style/Home.module.css';

class Home extends Component {
  render() {
    const { loggedIn, user } = this.props.auth;
    return (
      <main className="pt-5">
        <div className={home.main}>
          <div className="jumbotron pt-5 mb-0 bg-light">
            <h1 className="display-4 text-white">Hello, STAR WARS lovers!</h1>
            <p className="lead text-white">Welcome to the most extensive website related to Star Wars. All the information you need you'll find it here</p>
            <hr className="my-4" />
            <p className="text-white">You also can watch all the movies and TV shows in Disney+.</p>
            <div  className="lead text-white">
              {!loggedIn && (
                <p className="lead text-white">
                  Routes are protected. You need to login or signup first
                </p>
              )}

              {loggedIn && (
                <p className="lead text-white">
                  Welcome <strong>{user.username}!</strong>
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Home);


