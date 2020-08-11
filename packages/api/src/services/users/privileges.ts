import { User } from '../../models/user.model';

export const isAdminUser = async (user: User) => {
  return user.isAdmin;
};

export const isVipUser = async (user: User) => {
  return user.isVip;
};
