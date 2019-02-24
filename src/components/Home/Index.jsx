import React, { Component } from 'react';
import { connect } from 'react-redux';
import BeersList from '../common/BeersList';
import Status from '../common/Status';
import { getBeers } from '../../actions/beers';

class Home extends Component {
  constructor(props) {
    super(props);
    this.getFetchStatus = this.getFetchStatus.bind(this);
    this.getSearchStatus = this.getSearchStatus.bind(this);
  }

  componentWillMount() {
    this.props.getBeers();
  }

  /**
   * 
   * @description check for search result
   * null: no search triggered
   * [] : no search result
   * [...]: search result available
   */
  getSearchStatus() {
    const { searchResults } = this.props;

    if (!Array.isArray(searchResults)) {
      return null;
    }

    if (!searchResults.length) return {
      type: 'empty',
      text: 'No results for search query'
    }

    return true;
  }

  getFetchStatus() {
    const { allBeers: beers } = this.props;
    let text, type = null;

    if (beers === null) {
      type = 'loading';
      text = 'Loading all beers'
    }

    else if (beers === false) {
      type = 'error';
      text = 'Error occured while fetching beers'
    }

    else if (!Array.isArray(beers) || !beers.length) {
      type = 'empty';
      text = 'No beers are available in collection'
    }

    return !type || !text
      ? true
      : { text, type }
  }

  render() {
    const { allBeers, searchResults } = this.props;
    let status = this.getSearchStatus();
    let beers = searchResults;

    if (status === null) {
      status = this.getFetchStatus();
      beers = allBeers;
    }
  
    return (
      <div id="home">
        {
          status === true
            ? <BeersList beers={beers} />
            : (
              <div id="loader-wrap">
                <Status
                  type={status.type}
                  text={status.text}
                />
              </div>
            )
        }
      </div>
    );
  }
};

const mapStateToProps = ({
  beersReducer: { beers },
  searchReducer: { home }
}) => ({
  allBeers: beers,
  searchResults: home
});

const mapDispatchToProps = { getBeers };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
