import React from 'react';
import { create } from 'react-test-renderer';
import { TransparentNavbar } from '.';

describe('<TransparentNavbar />', () => {
  it('has rendered correctly', () => {
    const component = create(
      <TransparentNavbar>
        <div>hi</div>
      </TransparentNavbar>
    );
    const tree = component.toJSON()!;
    expect(tree).toMatchSnapshot();
  });
});
