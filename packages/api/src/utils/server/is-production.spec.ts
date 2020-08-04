import { isProduction } from './is-production';

jest.disableAutomock();

jest.mock('../../../config', () => ({
  config: {
    ENV: 'production'
  }
}));

describe('is-production', () => {
  it('should be production', () => {
    expect(isProduction()).toBe(true);
  });
});
