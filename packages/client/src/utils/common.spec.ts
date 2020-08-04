import { arrayify } from './common';

describe('common', () => {
  describe('arrayify', () => {
    it('should return empty list when empty list is inputted', () => {
      expect(arrayify([])).toStrictEqual([]);
    });
    it('should return input list when list is inputted', () => {
      expect(arrayify(['abc', '123'])).toStrictEqual(['abc', '123']);
    });
    it('should return list with empty string when empty string is inputted', () => {
      expect(arrayify('')).toStrictEqual(['']);
    });
    it('should return list with input string when string is inputted', () => {
      expect(arrayify('abc123')).toStrictEqual(['abc123']);
    });
  });
});
