import React from 'react';
import { shallow } from 'enzyme';
import MinWidthModal from '../src/components/MinWidthModal';

describe('MinWidthModal Component', () => {
  it('should render component', () => {
    const wrapper = shallow(<MinWidthModal />);
    const halfmsg = 'the minimum device width allowed is 655px';
    expect(wrapper.html().toLowerCase()).toContain(halfmsg);
  });
});
