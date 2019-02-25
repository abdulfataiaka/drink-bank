import React from 'react';

const BeerCard = ({ image, name, tagline, modal }) => (
  modal === true ? (
    <div className="modal-beer">
      <img src={image} />
      <span>{ name }</span>
    </div>
  ) : ( 
    <div className="beer-card">
      <span><i className="far fa-star" /></span>

      <img src={image} />
      <h5>{ name }</h5>
      <h6>{ tagline }</h6>
    </div>
  )
);

export default BeerCard;
