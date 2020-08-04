import { hashPassword, comparePassword } from './hash';
import { isProduction } from '../server/is-production';

jest.mock('bcrypt', () => ({
  hash: jest.fn((a, b) => `${a}${b}`),
  compare: jest.fn((a, b) => `${a}${b}`.length > 10)
}));

jest.mock('../server/is-production', () => ({
  isProduction: jest.fn(() => true)
}));

describe('hash', () => {
  describe('hashPassword', () => {
    it('should hash with bcrypt if in production mode', async () => {
      const password = 'abc';
      expect(await hashPassword(password)).toBe('abc10');
    });
    it('should return string back if not in production mode', async () => {
      (isProduction as jest.Mock).mockImplementationOnce(() => false);
      const password = 'abc';
      expect(await hashPassword(password)).toBe('abc');
    });
  });

  describe('comparePasswords', () => {
    it('should compare correctly', async () => {
      const password = 'abcde';
      expect(await comparePassword(password, '123456')).toBe(true);
      expect(await comparePassword(password, '12345')).toBe(false);
    });
    it('should compare just compare strings if not in production mode', async () => {
      (isProduction as jest.Mock).mockImplementationOnce(() => false);
      const password = 'abcde';
      expect(await comparePassword(password, 'abcde')).toBe(true);
      expect(await comparePassword(password, 'abc')).toBe(false);
    });
  });
});
