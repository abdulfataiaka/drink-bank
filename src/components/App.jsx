import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Favorite from './Favorite/Index';
import Home from './Home/Index';
import Nav from './common/Nav';
import Header from './common/Header';

import '../stylesheets/main.scss';

const App = () => (
  <Fragment>
    <Nav />
    <Header />

    <Switch>
      <Route exact path="/favourite" component={Favorite} />
      <Route component={Home} />
    </Switch>
  </Fragment>
);

export default App;
