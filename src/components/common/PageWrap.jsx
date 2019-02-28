import React, { Component } from 'react';
import  { connect } from 'react-redux';
import Status from './Status';

class PageWrap extends Component {
  constructor(props) {
    super(props);
    this.beersFetchStatus = this.beersFetchStatus.bind(this);
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

    return !type || !text ? true : { text, type }
  }

  render() {
    const status = this.beersFetchStatus();

    return status !== true
      ? <Status {...status} />
      : this.props.children
  }    
}

const mapStateToProps = (state)  => ({
  beerIds: state.beersReducer.beerIds
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PageWrap);

// getSearchStatus() {
  //   const { searchResults } = this.props;

  //   if (!Array.isArray(searchResults)) {
  //     return null;
  //   }

  //   if (!searchResults.length) return {
  //     type: 'empty',
  //     text: 'No results for search query'
  //   }

  //   return true;
  // }