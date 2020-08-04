import { VERSION } from './server-version';

jest.mock('bcrypt', () => ({
  hashSync: jest.fn((_, b) => `${b}`)
}));

describe('server-version', () => {
  it('should have correct version', () => {
    expect(VERSION).toBe('10');
  });
});
