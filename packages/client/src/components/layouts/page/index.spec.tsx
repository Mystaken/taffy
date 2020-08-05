import React from 'react';
import { create } from 'react-test-renderer';
import { Page } from '.';

describe('<Page />', () => {
  it('has rendered correctly', () => {
    const component = create(<Page />);
    const tree = component.toJSON()!;
    expect(tree).toMatchSnapshot();
  });
  it('has rendered correctly with a title', () => {
    const component = create(<Page title="test" />);
    const tree = component.toJSON()!;
    expect(tree).toMatchSnapshot();
  });
});
