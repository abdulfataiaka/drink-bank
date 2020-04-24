import React from 'react';

const Main = ({ beer }) => (
  <div className="second-level">
    <div className="image">
      <img src={beer.image_url} /> // You should use a transformer after the request to transform the fields 1. You will have your code in camelCase and it will sheild you from api field changes
    </div>
    <div className="details">
      <h5>{ beer.name }</h5>
      <h6>{ beer.tagline }</h6>
      <div className="line" />
      <div className="stats">
        // The three component below should be a component since you are repeating it
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
              <li key={index}>{ food }</li> // Dont use index as keys
            )) }
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Main;




     