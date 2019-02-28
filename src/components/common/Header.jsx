import React, { Component } from 'react';
import SearchField from './SearchField';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <h5>The Beer Bank</h5>
        <h6>Find your favourite beer here</h6>

        <SearchField />
      </div>
    );
  }
}

export default Header;

