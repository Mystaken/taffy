import { UserModel, User } from '../../models/user.model';
import { NotFoundError } from '../../errors/not-found.error';

export const setUserVIPStatus = async (userId: string, isVip: boolean) => {
  const user = await UserModel.findByIdAndUpdate(
    userId,
    {
      isVip
    },
    { new: true }
  ).exec();
  if (!user) {
    throw new NotFoundError('user');
  }
  return user.toJSON() as User;
};

export const setCustomerVIPStatus = async (
  customerId: string,
  isVip: boolean
) => {
  const user = await UserModel.findOneAndUpdate(
    { customerId },
    {
      isVip
    },
    { new: true }
  ).exec();
  if (!user) {
    throw new NotFoundError('user');
  }
  return user.toJSON() as User;
};
