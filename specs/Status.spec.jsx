import React from 'react';
import { shallow } from 'enzyme';
import Status from '../src/components/common/Status';

describe('Status Component', () => {
  it('should render loading status', () => {
    const wrapper = shallow(<Status type="loading" />);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.html()).toContain('Loading');
  });

  it('should render error status', () => {
    const wrapper = shallow(<Status type="error" text="Error"/>);
    const statusDiv = wrapper.find('div.status-wrap').find('div.status');
    expect(statusDiv.find('.fa-exclamation-circle').length).toBe(1);
    expect(wrapper.html()).toContain('Error');
  });

  it('should render empty status', () => {
    const wrapper = shallow(<Status type="empty" text="Empty"/>);
    const statusDiv = wrapper.find('div.status-wrap').find('div.status');
    expect(wrapper.find('.fa-frown').length).toBe(1);
    expect(wrapper.html()).toContain('Empty');
  });
});
