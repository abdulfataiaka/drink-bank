import React from 'react';
import BeerCard from './BeerCard';

const BeersList = () => (
  <div className="bootstrap-wrapper">
    <div className="row">
      <div className="col col-lg-6">
        <BeerCard />
      </div>

      <div className="col col-lg-6">
        <BeerCard />
      </div>
    </div>
  </div>
);

export default BeersList;
