import { userModel, User } from '../../models/user.model';
import { hashPassword } from '../../utils/common/hash';

export interface NewUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const createUser = async ({
  password,
  ...user
}: NewUser): Promise<User> => {
  const hashedPassword = await hashPassword(password);
  const useData = { password: hashedPassword, ...user };
  const newUser = await new userModel(useData).save();

  return newUser.toJSON();
};
