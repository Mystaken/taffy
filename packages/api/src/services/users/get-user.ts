import { UserModel, User } from '../../models/user.model';
import { NotFoundError } from '../../errors/not-found.error';
import { comparePassword } from '../../utils/common/hash';
import { TokenPayload } from 'google-auth-library';
import { FacebookPayload } from '../../routes/auth/facebook/client';
import { createUserWithStripe } from './create-user';

export interface UserCredentials {
  email: string;
  password: string;
}

export const getLoggedInUser = async ({
  email,
  password
}: UserCredentials): Promise<User> => {
  const document = await UserModel.findOne({
    email
  }).exec();

  if (!document) {
    throw new NotFoundError('user');
  }
  const foundUser: User = document.toJSON();
  const passHash = foundUser.password;

  if (!passHash) {
    throw new NotFoundError('user');
  }

  if (!(await comparePassword(password, passHash))) {
    throw new NotFoundError('user');
  }

  return foundUser;
};

export const getGoogleUser = async (payload: TokenPayload): Promise<User> => {
  let user = await UserModel.findOne({
    googleId: payload.sub
  }).exec();
  if (!user) {
    user = await createUserWithStripe({
      firstName: payload.given_name,
      lastName: payload.family_name,
      email: payload.email,
      googleId: payload.sub
    });
  }

  return user.toJSON();
};

export const getFacebookUser = async ({
  id,
  ...payload
}: FacebookPayload): Promise<User> => {
  let user = await UserModel.findOne({
    facebookId: id
  }).exec();
  if (!user) {
    user = await createUserWithStripe({ ...payload, facebookId: id });
  }

  return user.toJSON();
};

export const getUserFromCtx = async (ctx: any) => {
  const user: User | undefined = ctx?.state?.user;
  if (!user) {
    return null;
  }
  const document = await UserModel.findById(user.id).exec();
  if (!document) {
    return null;
  }
  const result: User = document.toJSON();
  return result;
};
