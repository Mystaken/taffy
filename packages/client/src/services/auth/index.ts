import { getCurrentUser } from './user-cookie';

export const authHeader = () => {
  const user = getCurrentUser();
  if (!user) {
    return {};
  }
  return {
    Authorization: `Bearer ${user.jwt}`
  };
};
