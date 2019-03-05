import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchField from './SearchField';
import { updateSearchResult } from '../../../actions/search';
import { onPageChange, getPage } from '../../../utils';

class Header extends Component {
  constructor(props) {
    super(props);
    this.setQuery = this.setQuery.bind(this);
    this.state = {
      query: '',
      page: null
    }
  }

  componentWillMount() {
    this.setState({ page: getPage() });
  }

  componentDidMount() {
    onPageChange((_, page) => {
      this.setState({ query: '', page });
      this.props.updateSearchResult(null);
    });
  }
  
  setQuery(query) {
    this.setState({ query })
  }

  render() {
    const { beers, beerIds, favouritesBeerIds, searchBeerIds } = this.props;
    const { page } = this.state;

    return (
      <div id="header">
        <h5>The Beer Bank</h5>
        <h6>Find your favourite beer here</h6>

        { page != '/search' && (
          <Fragment>
            <SearchField
              query={this.state.query}
              setQuery={this.setQuery}
              searchBeerIds={searchBeerIds}
              beers={beers}
              beerIds={beerIds}
              favouritesBeerIds={favouritesBeerIds}
              updateSearchResult={this.props.updateSearchResult}
            />

            <div>
              <Link to="/search">Advanced Search</Link>
            </div>
          </Fragment>
        ) }
      </div>
    );
  }
}



const mapStateToProps = ({
  beersReducer: {
    beerIds,
    favouritesBeerIds,
    beers,
    searchBeerIds
  },
}) => ({
  beers,
  beerIds,
  favouritesBeerIds,
  searchBeerIds
});

const mapDispatchToProps = { updateSearchResult };

export default connect(mapStateToProps, mapDispatchToProps)(Header);


