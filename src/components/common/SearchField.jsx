import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSearchResult } from '../../actions/search';
import history from '../../history';

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
    this.getSearchProps = this.getSearchProps.bind(this);
    this.state = {
      query: '',
      pathname: history.location.pathname
    }
  }

  componentWillMount() {
    history.listen(newLoc => {
      const { pathname } = this.state;
      const newPathName = newLoc.pathname;
      this.setState({ pathname: newPathName });
  
      if (pathname !== newPathName) {
        this.setState({ query: '' });
        this.props.updateSearchResult(null, true);
      }
    });
  }

  getPage() {
    const { location: { pathname }} = history;

    if (pathname === '/favourite') {
      return 'favourite';
    }

    return 'home'
  }

  getSearchProps() {
    const page = this.getPage();
    const { beerIds, favouritesBeerIds, beers } = this.props;

    const searchIds = (
      page === 'favourite'
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
    this.setState({ query: value });
    this.search(value);
  }

  render() {
    const { query } = this.state;

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


const mapStateToProps = ({
  beersReducer: { beerIds, favouritesBeerIds, beers }
}) => ({ beers, beerIds, favouritesBeerIds });

const mapDispatchToProps = { updateSearchResult };

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);

