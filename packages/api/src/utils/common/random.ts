import crypto from 'crypto';

export const getRandomString = (length: number) => {
  return crypto.randomBytes(length).toString('hex').slice(0, length);
};
