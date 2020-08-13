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

export const getJwtToken = () => {
  const user = getCurrentUser();
  return user?.jwt;
};
