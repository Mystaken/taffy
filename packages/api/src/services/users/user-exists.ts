import { TUserModel, userModel } from '../../models/user.model';

type CheckUserExistsInput = Partial<
  Pick<TUserModel, 'firstName' | 'lastName' | 'email' | 'active'>
>;

export const userExists = async (opt: CheckUserExistsInput) => {
  const matchers: any[] = [];

  Object.keys(opt).forEach(k => {
    if (k) {
      matchers.push({
        [k]: opt[k as keyof CheckUserExistsInput]
      });
    }
  });

  const foundUsers: TUserModel[] = await userModel
    .aggregate<TUserModel>([
      {
        $match: {
          $and: matchers
        }
      }
    ])
    .exec();
  return foundUsers.length > 0;
};
