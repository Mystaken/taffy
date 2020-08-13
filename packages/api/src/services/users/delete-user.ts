import { UserModel, User } from '../../models/user.model';
import { NotFoundError } from '../../errors/not-found.error';

export const deleteUserByCustomerId = async (customerId: string) => {
  const document = await UserModel.findOneAndDelete({ customerId }).exec();
  if (!document) {
    throw new NotFoundError('user');
  }
  return document.toJSON() as User;
};
