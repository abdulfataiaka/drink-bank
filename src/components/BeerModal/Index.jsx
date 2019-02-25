import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBeerId } from '../../actions/beers';
import View from './View';

class BeerModal extends Component {
  constructor(props) {
    super(props);
    this.onClose = this.onClose.bind(this);
    this.getBaseBeers = this.getBaseBeers.bind(this);
    this.getModalInfo = this.getModalInfo.bind(this);
    this.genIndexes = this.genIndexes.bind(this);
  }

  onClose() {
    this.props.setBeerId(null);
  }

  getModalInfo(beerId) {
    const { beers } = this.props;
    let beer = null;
    let baseBeers = [];

    if (beerId && Array.isArray(beers) && beers.length) {
      beer = beers.find(beer => `${beer.id}` == `${beerId}`);
      const index = beers.indexOf(beer) || 0;
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
    const { beers } = this.props;
    const length = beers.length;
    const indexes = this.genIndexes(index, beers.length - 1);

    return indexes.map(index => beers[index]);
  }

  render() {
    const { beerId } = this.props;
    console.log(beerId);
    const { beer, baseBeers } = this.getModalInfo(beerId);

    return (
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
  beersReducer: { beers }
}) => ({
  beerId,
  beers
});

const mapDispatchToProps = { setBeerId };

export default connect(mapStateToProps, mapDispatchToProps)(BeerModal);
