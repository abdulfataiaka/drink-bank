import React, { Component } from 'react';
import { connect } from 'react-redux';
import BeersList from '../common/BeersList';

class Favorite extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { favourites } = this.props;

    return (
      <div id="favorites">
        <BeersList beers={favourites} />
      </div>
    );
  }
};

const mapStateToProps = ({
  beersReducer: { favourites }
}) => ({
  favourites
});

const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
