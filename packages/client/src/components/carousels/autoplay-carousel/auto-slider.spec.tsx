import React from 'react';
import { AutoSlider } from './auto-slider';
import { shallow } from 'enzyme';

describe('<AutoSlider />', () => {
  it('has rendered correctly', () => {
    const tree = shallow(<AutoSlider />);
    expect(tree).toMatchSnapshot();
  });
  it('has rendered correctly with props', () => {
    const tree = shallow(<AutoSlider pagination swipeable />);
    expect(tree).toMatchSnapshot();
  });
});
