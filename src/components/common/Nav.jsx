import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getPage } from '../../utils';

// This your getPage() exposes the gap in your knowledge of this.props.match available to route components
const Nav = () => (
  <Fragment>
    <div id="nav" className={ getPage() === '/search' ? 'search': '' }>
      { getPage() === '/search' && (
        <Link to="/"><span id="span-left">The Beer Bank</span></Link>
      )}

      <Link to="/favourite"><span>FAVOURITE</span></Link>
      <Link to="/"><span>HOME</span></Link>
    </div>
    <div id="spacer" className={ getPage() === '/search' ? 'search': '' } /> //Dont repeat logic `getPage() === '/search'` three times 
  </Fragment>
);

export default Nav;

