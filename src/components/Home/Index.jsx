import React, { Fragment } from 'react';
import Header from './Header';
import BeersList from './BeersList';

const Home = () => (
  <Fragment>
    <Header />
    <BeersList />
  </Fragment>
);

export default Home;
