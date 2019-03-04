import React, { Component } from 'react';
import { connect } from 'react-redux';

import PageWrap from '../common/PageWrap';
import BeersList from '../common/BeersList';
import Fields from './Fields';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { beers } = this.props;
    const allBeers = Object.values(beers);
    return (
      <div id="search">
        <Fields beers={beers} />
        <PageWrap>
          <BeersList
            beers={allBeers}
          />
        </PageWrap>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  beers: state.beersReducer.beers
});

const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(Search);

