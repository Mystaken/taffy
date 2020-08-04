import React from 'react';
import { create } from 'react-test-renderer';

import { FooterText } from './footer-text';

describe('<FooterText />', () => {
  it('has rendered correctly', () => {
    const component = create(<FooterText />);
    const tree = component.toJSON()!;
    expect(tree).toMatchSnapshot();
  });
});
