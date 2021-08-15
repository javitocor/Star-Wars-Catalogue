import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../actions/authorization";
import navbar from '../style/Navbar.module.css';

class NavBar extends Component {

  handleLogoutClick = () => {
    this.props.logOut();
    this.props.history.push("/");
  };

  render() {
    const { loggedIn } = this.props.auth;

    return(
      <header className={navbar.header}>
        <nav>
          <div className={navbar.navtop}>
            <div className={navbar.navleft}>
              <ul className={navbar.toplistleft}>
                <li>
                  <a href="https://www.facebook.com/StarWars" ><i className="fab fa-facebook"></i></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/starwars/"><i className="fab fa-instagram"></i></a>
                </li>
                <li>
                  <a href="https://twitter.com/starwars"><i className="fab fa-twitter"></i></a>
                </li>
                <li>
                  <a href="https://www.youtube.com/user/starwars"><i className="fab fa-youtube"></i></a>
                </li>
              </ul>
            </div>
            <div className={navbar.navcenter}></div>
            <div className={navbar.navright}>
              <div>
                <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search Star Wars" aria-label="Search"/>                
                </form>
              </div>
              <div>
              {!loggedIn && (
                <ul>
                  <li><Link
                      name="login"
                      to="/login"
                      id="list-home-list"
                      data-toggle="list"
                      role="tab"
                      aria-controls="home"
                    >
                      LOG IN
                    </Link> 
                  </li>
                  <li className="mx-2">///</li>
                  <li><Link
                      name="signup"
                      to="/signup"
                      id="list-home-list"
                      data-toggle="list"
                      role="tab"
                      aria-controls="home"
                    >
                      SIGN UP
                    </Link>
                  </li>
                </ul>
              )}
              {loggedIn && (
                <ul>
                  <li>
                    <Link
                      name="logout"
                      onClick={this.handleLogoutClick}
                      to="/"
                      id="list-home-list"
                      data-toggle="list"
                      role="tab"
                      aria-controls="home"
                      >
                      LOG OUT
                  </Link>
                  </li>
                </ul>
              )}
              </div>
            </div>
          </div>
          <div className={navbar.navbottom}>
            <div>
              <ul>
                <li>
                  <Link
                    to="/"
                    id="list-home-list"
                    data-toggle="list"
                    role="tab"
                    aria-controls="home"
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    key="films"
                    name="films"
                    to={{
                      pathname: "/swinfo/movies",
                      state: {
                        resources: 'films',
                      },
                    }}
                    id="list-home-list"
                    data-toggle="list"
                    role="tab"
                    aria-controls="home"
                    >
                    MOVIES
                  </Link>
                </li>
                <li>
                  <Link
                    key="characters"
                    name="characters"
                    to={{
                      pathname: "/swinfo/characters",
                      state: {
                        resources: 'people',
                      },
                    }}
                    id="list-home-list"
                    data-toggle="list"
                    role="tab"
                    aria-controls="home"
                    >
                    CHARACTERS
                  </Link>
                </li>
                <li>
                  <Link
                    key="starships"
                    name="starships"
                    to={{
                      pathname: "/swinfo/starships",
                      state: {
                        resources: 'starships',
                      },
                    }}
                    id="list-home-list"
                    data-toggle="list"
                    role="tab"
                    aria-controls="home"
                    >
                    SPACESHIPS
                  </Link>
                </li>
                <li>
                  <Link
                    key="planets"
                    name="planets"
                    to={{
                      pathname: "/swinfo/planets",
                      state: {
                        resources: 'planets',
                      },
                    }}
                    id="list-home-list"
                    data-toggle="list"
                    role="tab"
                    aria-controls="home"
                    >
                    PLANETS
                  </Link>
                </li>
                <li>
                  <Link
                    key="species"
                    name="species"
                    to={{
                      pathname: "/swinfo/species",
                      state: {
                        resources: 'species',
                      },
                    }}
                    id="list-home-list"
                    data-toggle="list"
                    role="tab"
                    aria-controls="home"
                    >
                    SPECIES
                  </Link>
                </li>
                <li>
                  <Link
                    key="vehicles"
                    name="vehicles"
                    to={{
                      pathname: "/swinfo/vehicles",
                      state: {
                        resources: 'vehicles',
                      },
                    }}
                    id="list-home-list"
                    data-toggle="list"
                    role="tab"
                    aria-controls="home"
                    >
                    VEHICLES
                  </Link>
                </li>
              </ul>
            </div>          
          </div>
          <div className={navbar.navextra}><div>ALL OF YOUR STAR WARS FAVOURITES NOW STREAMING IN DISNEY+</div></div>
        </nav>
      </header>
    ) 
  } 
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, { logOut })(withRouter(NavBar));

