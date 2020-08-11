import { UserModel, User } from '../../models/user.model';
import { NotFoundError } from '../../errors/not-found.error';

export const setUserVIPStatus = async (userId: string, isVIP: boolean) => {
  const user = await UserModel.findByIdAndUpdate(
    userId,
    {
      isVIP
    },
    { new: true }
  ).exec();
  if (!user) {
    throw new NotFoundError('user');
  }
  return user.toJSON() as User;
};
