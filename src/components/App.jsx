import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Favorite from './Favorite/Index';
import Home from './Home/Index';
import Search from './Search/Index';
import Nav from './common/Nav';
import Header from './common/Header/Index';
import BeerModal from './BeerModal/Index';
import '../stylesheets/main.scss';

const App = () => (
  <Fragment>
    <BeerModal />
    <Nav />
    <Header />

    <Switch>
      <Route exact path="/favourite" component={Favorite} />
      <Route exact path="/search" component={Search} />
      <Route component={Home} />
    </Switch>
  </Fragment>
);

export default App;
