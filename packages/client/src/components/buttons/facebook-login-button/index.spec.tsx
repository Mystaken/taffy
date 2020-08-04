import React from 'react';
import { create } from 'react-test-renderer';
import { FacebookLoginButton } from '.';

describe('<FacebookLoginButton />', () => {
  beforeAll(() => {
    const script = document.createElement('script');
    document.body.appendChild(script);
  });
  it('has rendered correctly', () => {
    const component = create(<FacebookLoginButton callback={() => null} />);
    const tree = component.toJSON()!;
    expect(tree).toMatchSnapshot();
  });
});
