import { hash, compare } from 'bcrypt';
import { isProduction } from '../server/is-production';

const ROUNDS = 10;

export const hashPassword = async (password: string) => {
  if (!isProduction()) {
    return password;
  }
  return hash(password, ROUNDS);
};

export const comparePassword = async (password: string, hash: string) => {
  if (!isProduction()) {
    return password === hash;
  }
  return compare(password, hash);
};
