import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <Fragment>
    <div id="nav">
      <Link to="/"><span>HOME</span></Link>
      <Link to="/favourite"><span>FAVOURITE</span></Link>
    </div>
    <div id="spacer" />
  </Fragment>
);

export default Nav;

