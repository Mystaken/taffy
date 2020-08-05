import { UserModel, User } from '../../models/user.model';
import { NotFoundError } from '../../errors/not-found.error';
import { comparePassword } from '../../utils/common/hash';
import { TokenPayload } from 'google-auth-library';
import { FacebookPayload } from '../../routes/auth/facebook/client';

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
    googleID: payload.sub
  }).exec();
  if (!user) {
    user = await new UserModel({
      firstName: payload.given_name,
      lastName: payload.family_name,
      email: payload.email,
      googleID: payload.sub
    }).save();
  }

  return user.toJSON();
};

export const getFacebookUser = async ({
  id,
  ...payload
}: FacebookPayload): Promise<User> => {
  let user = await UserModel.findOne({
    facebookID: id
  }).exec();
  if (!user) {
    user = await new UserModel({ ...payload, facebookID: id }).save();
  }

  return user.toJSON();
};
