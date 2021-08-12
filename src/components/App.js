import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import NavBar from './NavBar';

const App = () => (
  <Router>
    <Switch>
      <>
        <div className=" p-3">
          <div className="row d-sm-flex flex-sm-column d-md-flex flex-md-row">
            <Route path="/" component={NavBar} />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="signup" component={Signup} />
          </div>
        </div>
      </>
    </Switch>
  </Router>
);

export default App;