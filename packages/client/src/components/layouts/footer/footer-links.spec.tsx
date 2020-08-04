import React from 'react';
import { create } from 'react-test-renderer';

import { FooterLinks } from './footer-links';

describe('<FooterLinks />', () => {
  it('has rendered correctly', () => {
    const component = create(<FooterLinks />);
    const tree = component.toJSON()!;
    expect(tree).toMatchSnapshot();
  });
});
