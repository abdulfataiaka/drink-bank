import React, { Component } from 'react';
import  { connect } from 'react-redux';
import Status from './Status';
import BeersList from './BeersList';

class PageWrap extends Component {
  constructor(props) {
    super(props);
    this.beersFetchStatus = this.beersFetchStatus.bind(this);
    this.searchStatus = this.searchStatus.bind(this);
  }


  searchStatus() {
    const { searchResults } = this.props;

    if (!Array.isArray(searchResults)) {
      return true;
    }

    if (!searchResults.length) return {
      type: 'empty',
      text: 'No results for search query'
    }

    return null;
  }

  beersFetchStatus() {
    const { beerIds } = this.props;
    let text, type = null;
    
    if (beerIds === null) {
      type = 'loading';
      text = 'Fetching all beers'
    }

    else if (beerIds === false) {
      type = 'error';
      text = 'Error occured while fetching all beers'
    }

    else if (!Array.isArray(beerIds) || !beerIds.length) {
      type = 'empty';
      text = 'No beers are available in collection'
    }

    return !type || !text ? true : { text, type } // This is called return type marshalling: suggestion do the boolean handling in another function
  }

  render() {
    const { searchResults } = this.props;
    let status = this.beersFetchStatus();
    let search = false;
  
    if (status === true) {
      status = this.searchStatus();
      if (status === null) {
        search = true;
      }
    }

    return search === true
      ? <BeersList beers={searchResults} />
      : status === true
        ? this.props.children
        : <Status {...status} />
  }    
}

const mapStateToProps = (state)  => ({
  beerIds: state.beersReducer.beerIds,
  searchResults: state.searchReducer
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PageWrap);
