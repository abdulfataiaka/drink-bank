import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../src/components/App';

describe('App Component', () => {
  it('should render component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.html()).toContain('Welcome');
  });
});
