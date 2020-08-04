import React from 'react';
import { create } from 'react-test-renderer';

import { NavbarContent } from '.';

describe('<NavbarContent />', () => {
  it('has rendered correctly', () => {
    const component = create(<NavbarContent />);
    const tree = component.toJSON()!;
    expect(tree).toMatchSnapshot();
  });
});
