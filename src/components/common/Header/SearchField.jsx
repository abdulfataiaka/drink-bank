import React, { Component } from 'react';
import { getPage } from '../../../utils';

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
    this.getSearchProps = this.getSearchProps.bind(this);
  }

  getSearchProps() {
    const page = getPage();
    const { beerIds, favouritesBeerIds, beers } = this.props;

    const searchIds = (
      page === '/favourite'
        ? favouritesBeerIds
        : beerIds
    )

    return {
      page,
      beers: searchIds.map(id => beers[id])
    }
  }

  search(query) {
    const { beers } = this.getSearchProps();
    
    let result;
    if (query.trim() === '') {
      result = null;
    }
    
    else {
      const match = new RegExp(`^${query.toLowerCase()}`);
      result = beers.filter((beer => (
        beer.name.toLowerCase().match(match) ||
        beer.tagline.toLowerCase().match(match)
      )));
    }

    this.props.updateSearchResult(result);
  }

  onChange(event) {
    const { target: { value } } = event;
    this.props.setQuery(value);
    this.search(value);
  }

  render() {
    const { query } = this.props;

    return (
      <input
        type="text"
        placeholder="Search for beer name"
        value={query}
        onChange={this.onChange}
      />
    );
  }
}

export default SearchField;

