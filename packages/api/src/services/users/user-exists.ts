import { TUserModel, UserModel } from '../../models/user.model';

type UserExistsParams = Partial<
  Pick<TUserModel, 'firstName' | 'lastName' | 'email' | 'active'>
>;

export const userExists = async (opt: UserExistsParams) => {
  const matchers: Record<string, string | boolean | undefined>[] = [];

  Object.keys(opt).forEach(k => {
    if (k) {
      matchers.push({
        [k]: opt[k as keyof UserExistsParams]
      });
    }
  });

  const foundUsers: TUserModel[] = await UserModel.aggregate<TUserModel>([
    {
      $match: {
        $and: matchers
      }
    }
  ]).exec();
  return foundUsers.length > 0;
};
