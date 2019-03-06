import React, { Component } from 'react';
import { connect } from 'react-redux';

import PageWrap from '../common/PageWrap';
import BeersList from '../common/BeersList';
import Status from '../common/Status';

class Favourite extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { beers, favouritesBeerIds } = this.props;
    const favouritesBeers = favouritesBeerIds.map(id => beers[id]);
    console.log(beers);
    return (
      <PageWrap>
        <div id="favourite">
          { 
            favouritesBeers.length
              ? <BeersList beers={favouritesBeers} />
              : <Status text="No beer has been added as favourite" type="empty" />
          } 
        </div>
      </PageWrap>
    );
  }
}


const mapStateToProps = ({ beersReducer }) => ({
  beers: beersReducer.beers,
  favouritesBeerIds: beersReducer.favouritesBeerIds
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
