import React from 'react';
import { shallow } from 'enzyme';
import BeersList from '../src/components/common/BeersList';
import BeerCard from '../src/components/common/BeerCard';
import mocks from './support/mocks';

describe('BeersList Component', () => {
  it('should render zero beers', () => {
    const wrapper = shallow(<BeersList beers={[]} />);
    expect(wrapper.find(BeerCard).length).toBe(0);
  });

  it('should render two beers', () => {
    const beers = [ ...mocks.beers ];
    const wrapper = shallow(<BeersList beers={beers} />);
    expect(wrapper.find(BeerCard).length).toBe(1);
  });
});
