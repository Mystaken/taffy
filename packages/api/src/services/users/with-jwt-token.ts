import { sign } from 'jsonwebtoken';
import { User } from '../../models/user.model';
import { config } from '../../../config';

export interface SessionUser extends User {
  jwt: string;
}

export const withJwtToken = async (user: User): Promise<SessionUser> => {
  const token = sign(user, config.JWT_PRIVATE_KEY);
  return { ...user, jwt: token };
};
