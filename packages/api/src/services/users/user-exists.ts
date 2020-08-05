import { TUserModel, UserModel } from '../../models/user.model';
import { formAggregateMatcher } from '../../utils/api/form-aggregate-matcher';

type UserExistsParams = Partial<
  Pick<TUserModel, 'firstName' | 'lastName' | 'email' | 'active'>
>;

export const userExists = async (opt: UserExistsParams) => {
  const foundUsers: TUserModel[] = await UserModel.aggregate<TUserModel>([
    {
      $match: { ...formAggregateMatcher('and', opt) }
    }
  ]).exec();
  return foundUsers.length > 0;
};
