import React from 'react';
import BeerCard from './BeerCard';

const BeersList = ({ beers }) => (
  <div className="beer-list">
    <div className="beer-aligner">
      { beers.map(beer => (
        <BeerCard
          key={beer.id}
          id={beer.id}
          image={beer.image_url}
          name={beer.name}
          tagline={beer.tagline}
        />
      )) }
    </div>
  </div>
);

export default BeersList;
