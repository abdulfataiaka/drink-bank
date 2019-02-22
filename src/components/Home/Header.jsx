import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div id="header">
    <h5>The Beer Bank</h5>
    <h6>Find your favorite beer here</h6>

    <input
      type="text"
      placeholder="Search for beer name"
    />
  </div>
);

export default Header;
