import { UserModel, User, TUserModel } from '../../models/user.model';
import { hashPassword } from '../../utils/common/hash';
import { createCustomer } from '../stripe/customers/create-customer';

export interface NewStripeUser
  extends Omit<TUserModel, 'customerId' | 'active'> {}

export const createUserWithStripe = async (user: NewStripeUser) => {
  const stripeCustomer = await createCustomer(user);
  const newuser = {
    ...user,
    customerId: stripeCustomer.id
  };
  return new UserModel(newuser).save();
};

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
  const newUser = await createUserWithStripe(useData);
  return newUser.toJSON();
};
