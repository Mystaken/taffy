import { create } from 'react-test-renderer';
import React from 'react';
import RatingSelectDialog from '.';

it('RatingSelectDialog component has rendered correctly', () => {
  const component = create(<RatingSelectDialog open />);
  const tree = component.toJSON()!;
  expect(tree).toMatchSnapshot();
});
