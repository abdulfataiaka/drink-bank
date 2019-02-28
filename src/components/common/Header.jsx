import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSearchResult } from '../../actions/search';
import history from '../../history';

class Header extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
    this.getSearchProps = this.getSearchProps.bind(this);
    this.state = {
      query: ''
    }
  }

  componentDidMount() {
    // history.listen(() => {
    //   this.setState({ query: '' });
    //   this.props.updateSearchResult(null, true);
    // });
  }

  getPage() {
    // const { location: { pathname }} = history;

    // if (pathname === '/favourite') {
    //   return 'favourite';
    // }

    // return 'home'
  }

  getSearchProps() {
    // const page = this.getPage();
    // const { allBeers, allFavourites } = this.props;

    // return {
    //   page,
    //   beers: (
    //     page === 'favourite'
    //       ? allFavourites
    //       : allBeers
    //   )
    // }
  }

  search(query) {
    // const { page, beers } = this.getSearchProps();
    // let value;

    // if (query.trim() === '') {
    //   value = null;
    // }
    
    // else {
    //   const match = new RegExp(`^${query.toLowerCase()}`);
    //   value = beers.filter((beer => (
    //     beer.name.toLowerCase().match(match) ||
    //     beer.tagline.toLowerCase().match(match)
    //   )));
    // }

    // this.props.updateSearchResult(value, page);
  }

  onChange(event) {
    // const { target: { value } } = event;
    // this.setState({ query: value });
    // this.search(value);
  }

  render() {
    const { query } = this.state;

    return (
      <div id="header">
        <h5>The Beer Bank</h5>
        <h6>Find your favourite beer here</h6>

        <input
          type="text"
          placeholder="Search for beer name"
          value={query}
          onChange={this.onChange}
        />
      </div>
    );
  }
}


const mapStateToProps = ({
  beersReducer: { beers, favourites }
}) => ({
  allBeers: beers,
  allFavourites: favourites
});

const mapDispatchToProps = { updateSearchResult };

export default connect(mapStateToProps, mapDispatchToProps)(Header);

