import { validateEmail } from './validators';

describe('validators', () => {
  describe('validateEmail', () => {
    it('should return false on empty string', () => {
      expect(validateEmail('')).toEqual(false);
    });
    it('should return false on string without @', () => {
      expect(validateEmail('abc')).toEqual(false);
    });
    it('should return success on string with @', () => {
      expect(validateEmail('abc@gmail.com')).toEqual(true);
    });
  });
});
