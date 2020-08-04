import React from 'react';
import { create } from 'react-test-renderer';

import { Footer } from '.';

describe('<Footer />', () => {
  it('has rendered correctly', () => {
    const component = create(<Footer />);
    const tree = component.toJSON()!;
    expect(tree).toMatchSnapshot();
  });
});
