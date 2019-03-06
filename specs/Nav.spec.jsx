import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter, Link } from 'react-router-dom';
import Nav from '../src/components/common/Nav';

const NavWrap = (
  <BrowserRouter>
    <Nav />
  </BrowserRouter>
);

describe('Nav Component', () => {
  it('should render component', () => {
    const wrapper = shallow(NavWrap);
    const html = wrapper.html().toLowerCase();
    expect(wrapper.find(Nav).length).toBe(1);
    expect(html).toContain('home');
    expect(html).toContain('favourite');
  });
});
