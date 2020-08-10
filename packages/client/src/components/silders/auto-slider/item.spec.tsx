import React from 'react';
import { AutoSliderItem } from './item';
import { shallow } from 'enzyme';

describe('<AutoSliderItem />', () => {
  it('has rendered correctly', () => {
    const tree = shallow(<AutoSliderItem image="" />);
    expect(tree).toMatchSnapshot();
  });
});
