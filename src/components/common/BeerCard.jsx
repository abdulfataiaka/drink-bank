import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBeerId, updateFavourites } from '../../actions/beers';

class BeerCard extends Component {
  constructor(props) {
    super(props);
    this.favouriteHandle = this.favouriteHandle.bind(this);
    this.cardClickHandle = this.cardClickHandle.bind(this);
  }

  favouriteHandle(event, id) {
    event.stopPropagation();
    this.props.updateFavourites(id);
  }

  cardClickHandle(event, id) {
    event.preventDefault();
    this.props.setBeerId(id);
  }

  render(){
    const { id, name, modal, image, tagline, favouritesBeerIds } = this.props;
    const isFavourite = favouritesBeerIds.includes(id);
    
    return (
      <a onClick={(event) => this.cardClickHandle(event, id)}>
        {
          modal === true
            ? (
              <div className="modal-beer">
                <img src={image} />
                <span>{ name }</span>
              </div>
            ) : ( 
              <div className="beer-card">
                <button type="button" onClick={(event) => this.favouriteHandle(event, id)}>
                  {
                    isFavourite
                      ? <i className="fas fa-star" />
                      : <i className="far fa-star" />
                  }
                </button>

                <img src={image} />
                <h5>{ name }</h5>
                <h6>{ tagline }</h6>
              </div>
            )}
      </a>
    );
  }
}

const mapStateToProps = ({ beersReducer }) => ({
  favouritesBeerIds: beersReducer.favouritesBeerIds
});

const mapDispatchToProps = { setBeerId, updateFavourites };
export default connect(mapStateToProps, mapDispatchToProps)(BeerCard);
