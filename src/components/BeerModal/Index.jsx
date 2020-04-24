import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBeerId } from '../../actions/beers';
import View from './View';

class BeerModal extends Component {
  constructor(props) {
    super(props);
    this.onClose = this.onClose.bind(this); // Use arrow function defination to bind to the class
    this.getBaseBeers = this.getBaseBeers.bind(this);
    this.getModalInfo = this.getModalInfo.bind(this);
    this.genIndexes = this.genIndexes.bind(this);
  }

  onClose() { // What is closing
    this.props.setBeerId(null);
  }

  getModalInfo(beerId) {
    const { beerIds, beers } = this.props;
    let beer = null;
    let baseBeers = [];

    if (beerId && Array.isArray(beerIds) && beerIds.length) {
      beer = beers[beerId];
      const index = beerIds.indexOf(beerId) || 0;
      baseBeers = !!beer ? this.getBaseBeers(index) : []; 
    }
    
    return { beer, baseBeers };
  }

  genIndexes(exclude, upperBound) {
    const indexes = [];
    while (indexes.length < 3) {
      const index = Math.floor(Math.random() * upperBound);
      if (exclude !== index && !indexes.includes(index)) {
        indexes.push(index);
      }
    }
    return indexes;
  }

  getBaseBeers(index) {
    const { beers, beerIds } = this.props;
    const indexes = this.genIndexes(index, beerIds.length - 1);
    const filteredBeerIds = indexes.map(index => beerIds[index]);
    return filteredBeerIds.map(beerId => beers[beerId]);
  }

  render() {
    const { beerId } = this.props;
    const { beer, baseBeers } = this.getModalInfo(beerId);

    return !beer ? null : (
      <View
        beer={beer}
        baseBeers={baseBeers}
        onClose={this.onClose}
      />
    );
  }
}

const mapStateToProps = ({
  modalReducer: { beerId },
  beersReducer: { beers, beerIds }
}) => ({
  beerId,
  beers,
  beerIds
});

const mapDispatchToProps = { setBeerId };

export default connect(mapStateToProps, mapDispatchToProps)(BeerModal);
