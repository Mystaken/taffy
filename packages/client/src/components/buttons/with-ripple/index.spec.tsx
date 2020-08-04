import React from 'react';
import { shallow } from 'enzyme';
import Button from '@material-ui/core/Button';
import { create } from 'react-test-renderer';

import { WithRipple } from '.';

describe('WithRipple', () => {
  it('should render correctly', () => {
    const RippleButton = WithRipple(Button);
    const wrapper = create(
      <RippleButton rippleColor="red">Hello</RippleButton>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should add ripple as prop', () => {
    const RippleButton = WithRipple(Button);
    const wrapper = shallow(
      <RippleButton rippleColor="red">Hello</RippleButton>
    );
    expect(wrapper.props()).toHaveProperty('TouchRippleProps');
  });
  it('should carry button props prop', () => {
    const RippleButton = WithRipple(Button);
    const wrapper = shallow(
      <RippleButton rippleColor="red" fullWidth>
        Hello
      </RippleButton>
    );
    expect(wrapper.props()).toHaveProperty('fullWidth', true);
  });
});
