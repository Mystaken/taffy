import React from 'react';
import { create } from 'react-test-renderer';
import { GoogleLoginButton } from '.';

describe('<GoogleLoginButton />', () => {
  it('has rendered correctly', () => {
    const component = create(
      <GoogleLoginButton onSuccess={() => null} onFailure={() => null} />
    );
    const tree = component.toJSON()!;
    expect(tree).toMatchSnapshot();
  });
});
