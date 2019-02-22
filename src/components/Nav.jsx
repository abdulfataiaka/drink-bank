import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div id="nav">
    <Link to="/"><span>HOME</span></Link>
    <Link to="/favorite"><span>FAVORITE</span></Link>
  </div>
);

export default Nav;

