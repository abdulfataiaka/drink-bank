import React from 'react';

const Main = ({ beer }) => (
  <div className="second-level">
    <div className="image">
      <img src={beer.image_url} />
    </div>
    <div className="details">
      <h5>{ beer.name }</h5>
      <h6>{ beer.tagline }</h6>
      <div className="line" />
      <div className="stats">
        <span className="key">IBU:</span>
        <span className="value">{ beer.ibu }</span>

        <span className="key">ABV:</span>
        <span className="value">{ beer.abv }%</span>

        <span className="key">EBC:</span>
        <span className="value">{ beer.ebc }</span>

        <p>{ beer.description }</p>

        <div className="best-served">
          <div>Best served with:</div>
          <ul>
            { beer.food_pairing.map((food, index) => (
              <li key={index}>{ food }</li>
            )) }
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Main;




     