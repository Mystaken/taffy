import React from 'react';
import { AutoplayCarousel, AutoplayCarouselItem } from '.';
import { shallow } from 'enzyme';

describe('<AutoplayCarousel />', () => {
  it('has rendered correctly', () => {
    const tree = shallow(<AutoplayCarousel />);
    expect(tree).toMatchSnapshot();
  });
});

describe('<AutoplayCarouselItem />', () => {
  it('has rendered correctly', () => {
    const tree = shallow(<AutoplayCarouselItem image="" />);
    expect(tree).toMatchSnapshot();
  });
});
