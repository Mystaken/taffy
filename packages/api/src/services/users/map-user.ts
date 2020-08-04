import { User } from '../../models/user.model';
// import { User } from './types';

export const mapUser = ({
  id,
  firstName,
  lastName,
  email,
  lastLogin,
  createdAt,
  updatedAt
}: User): any => ({
  id,
  firstName,
  lastName,
  email,
  lastLogin,
  createdAt,
  updatedAt
});
