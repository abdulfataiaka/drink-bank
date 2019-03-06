import React, { Component } from 'react';
import { connect } from 'react-redux';

import PageWrap from '../common/PageWrap';
import BeersList from '../common/BeersList';

import { setHomeBeers } from '../../actions/beers';

class Home extends Component {
  constructor(props) {
    super(props);
    this.showMoreClick = this.showMoreClick.bind(this);
  }

  showMoreClick() {
    this.props.setHomeBeers();
  }

  pageView() {
    const { beers, homeBeerIds } = this.props;
    const homeBeers = homeBeerIds.map(id => beers[id]);

    return (
      <div id="home">
        <BeersList beers={homeBeers} />

        { (Object.keys(beers).length > homeBeerIds.length) && (
          <button
            type="text"
            onClick={this.showMoreClick}
            id="show-more"
          >
            Show More
          </button>
        ) }
      </div>
    );
  }

  render() {
    return (
      <PageWrap>
        { this.pageView() }
      </PageWrap>
    );
  }
}


const mapStateToProps = ({ beersReducer }) => ({
  beers: beersReducer.beers,
  homeBeerIds: beersReducer.homeBeerIds
});

const mapDispatchToProps = { setHomeBeers };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
