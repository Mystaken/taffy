import React from 'react';
import { create } from 'react-test-renderer';

import { FooterIcons } from './footer-icons';

describe('<FooterIcons />', () => {
  it('has rendered correctly', () => {
    const component = create(<FooterIcons />);
    const tree = component.toJSON()!;
    expect(tree).toMatchSnapshot();
  });
});
