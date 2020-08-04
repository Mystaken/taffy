import React from 'react';
import { create } from 'react-test-renderer';
import { SignupDialogContent } from './signup-dialog-content';
import { shallow } from 'enzyme';

jest.mock('react-hook-form', () => ({
  useForm: jest.fn(() => ({
    register: jest.fn(),
    errors: {},
    handleSubmit: jest.fn((d: any) => d),
    watch: jest.fn()
  }))
}));

describe('<SignupDialogContent />', () => {
  it('has rendered correctly', () => {
    const component = create(<SignupDialogContent />);
    const tree = component.toJSON()!;
    expect(tree).toMatchSnapshot();
  });
  it('should invoke onSubmit when submit button is clicked.', () => {
    const submitFn = jest.fn();
    const wrapper = shallow(<SignupDialogContent onSignup={submitFn} />);
    wrapper
      .find('form')
      .props()
      .onSubmit?.('' as any);
    expect(submitFn).toBeCalled();
  });
  it('should not invoke onSubmit when submit button is clicked with errors.', () => {
    const submitFn = jest.fn();
    const wrapper = shallow(<SignupDialogContent onSignup={submitFn} />);
    wrapper
      .find('form')
      .props()
      .onSubmit?.('' as any);
    expect(submitFn).toBeCalled();
  });
});
