import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Favorite from './Favorite/Index';
import Home from './Home/Index';
import '../stylesheets/main.scss';
import Nav from './Nav';

const App = () => (
  <Fragment>
    <Nav />
    <div id="spacer" />
    <Switch>
      <Route exact path="/favorite" component={Favorite} />
      <Route component={Home} />
    </Switch>
  </Fragment>
);

export default App;
