import React, { Component } from 'react';
import { connect } from 'react-redux';

import PageWrap from '../common/PageWrap';
import BeersList from '../common/BeersList';
import Status from '../common/Status';
// Use and index file in `./common`
// The you will be able to do import {PageWrap, BeerlIst, Status} from './common'
import Fields from './Fields';

class Search extends Component {
  constructor(props) { // Needless constructor
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
        <Fields beers={beers} /> // Too generic a name
        <div id="search-right"> // Use classes to add css not ids
          <div id="content">
            <PageWrap>
              { 
                searchBeers.length
                  ? <BeersList beers={searchBeers} />
                  : <Status text="No results for search parameters" type="empty" /> // `Status` is too generic a name for a component
              } 
            </PageWrap>
          </div>
        </div>
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

