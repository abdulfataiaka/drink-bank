import React, { Component } from 'react';
import { connect } from 'react-redux';

import PageWrap from '../common/PageWrap';
import BeersList from '../common/BeersList';
import Status from '../common/Status';
import Fields from './Fields';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { beers, searchBeerIds } = this.props;

    const searchBeers = (
      searchBeerIds === null
        ? Object.values(beers)
        : searchBeerIds.map(id => beers[id])
    );

    return (
      <div id="search">
        <Fields beers={beers} />
        <PageWrap>
          { 
            searchBeers.length
              ? <BeersList beers={searchBeers} />
              : <Status text="No results for search parameters" type="empty" />
          } 
        </PageWrap>
      </div>
    );
  }
}


const mapStateToProps = ({ beersReducer: {beers, searchBeerIds } }) => ({
  beers,
  searchBeerIds
});

const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(Search);

