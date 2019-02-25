import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setBeerId } from '../../actions/beers';

const BeerCard = (props) => (
  <Link to="#" onClick={() => props.setBeerId(props.id)}>
    { props.modal === true ? (
      <div className="modal-beer">
        <img src={props.image} />
        <span>{ props.name }</span>
      </div>
    ) : ( 
      <div className="beer-card">
        <span><i className="far fa-star" /></span>

        <img src={props.image} />
        <h5>{ props.name }</h5>
        <h6>{ props.tagline }</h6>
      </div>
    )}
  </Link>
);

const mapDispatchToProps = { setBeerId };
export default connect(null, mapDispatchToProps)(BeerCard);
