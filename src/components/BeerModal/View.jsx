import React from 'react';
import BeerCard from '../common/BeerCard';
import Main from './Main';
const image = "https://images.punkapi.com/v2/2.png";

const View = (props) => (
  <div id="beer-modal">
    <div className="overlay" />
    <div className="whitebox">
      <div className="top-level">
        <button>
          <i className="fas fa-times" />
        </button>
      </div>

      <Main />

      <div className="base">
        <h5>You might also like:</h5>
        <div>
          <BeerCard modal image={image} name="Buzz" />
          <BeerCard modal image={image} name="Buzz" />
          <BeerCard modal image={image} name="Buzz" />
        </div>
      </div>
    </div>
  </div>
);

export default View;
