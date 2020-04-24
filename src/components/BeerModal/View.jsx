import React from 'react';
import BeerCard from '../common/BeerCard';
import Main from './Main';

const View = ({ beer, onClose, baseBeers }) => (
  // if you are using id in react then you are doing something very wrong
  <div id="beer-modal" className="modal" style={{ display: `${!!beer ? 'block': 'none'}` }}>
    <div className="overlay" />
    <div className="whitebox">
      <div className="top-level">
        <button type="button" onClick={onClose}>
          <i className="fas fa-times" />
        </button>
      </div>

      <Main beer={beer} />

      <div className="base">
        <h5>You might also like:</h5>
        <div>
          { baseBeers.map(rBeer => ( // Why not baseBeer
            <BeerCard
              modal
              key={rBeer.id}
              id={rBeer.id}
              image={rBeer.image_url}
              name={rBeer.name}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default View;
