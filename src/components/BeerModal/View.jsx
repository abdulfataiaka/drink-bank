import React from 'react';
import BeerCard from '../common/BeerCard';
import Main from './Main';
const image = "https://images.punkapi.com/v2/2.png";

const View = ({ beer, onClose, baseBeers }) => (
  <div id="beer-modal" style={{ display: `${!!beer ? 'block': 'none'}` }}>
    <div className="overlay" />
    <div className="whitebox">
      <div className="top-level">
        <button type="button" onClick={onClose}>
          <i className="fas fa-times" />
        </button>
      </div>

      <Main />

      <div className="base">
        <h5>You might also like:</h5>
        <div>
          { baseBeers.map(beer => (
            <BeerCard
              modal
              key={beer.id}
              id={beer.id}
              image={beer.image_url}
              name={beer.name}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default View;
