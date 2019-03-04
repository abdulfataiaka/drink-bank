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
    const { beers, beerIds, favouritesBeerIds } = this.props;
    const { page } = this.state;

    return (
      <div id="header">
        <h5>The Beer Bank</h5>
        <h6>Find your favourite beer here</h6>

        <SearchField
          query={this.state.query}
          setQuery={this.setQuery}
          beers={beers}
          beerIds={beerIds}
          favouritesBeerIds={favouritesBeerIds}
          updateSearchResult={this.props.updateSearchResult}
        />

        { page != '/search' && (
          <div>
            <Link to="/search">Advanced Search</Link>
          </div>
        ) }
      </div>
    );
  }
}



const mapStateToProps = ({
  beersReducer: { beerIds, favouritesBeerIds, beers }
}) => ({ beers, beerIds, favouritesBeerIds });

const mapDispatchToProps = { updateSearchResult };

export default connect(mapStateToProps, mapDispatchToProps)(Header);


