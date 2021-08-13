import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Items from '../containers/Items';
import ItemCard from '../containers/ItemCard';
import NavBar from './NavBar';
import history from '../history';
import ProtectedRoute from '../containers/ProtectedRoute';

const App = () => (
  <Router history={history}>
    <Switch>
      <>
        <div className="">
          <div className="row d-sm-flex flex-sm-row d-md-flex flex-md-row">
            <Route path="/" component={NavBar} />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} type="guest" />
            <Route exact path="/signup" component={Signup} type="guest" />
            <ProtectedRoute exact path="/swinfo/:id" component={Items} type="private"/>
            <ProtectedRoute exact path="/swinfo/:id/:detail" component={ItemCard} type="private"/>
          </div>
        </div>
      </>
    </Switch>
  </Router>
);

export default App;