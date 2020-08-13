interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  lastLogin: string;
  isVip: boolean;
  isAdmin: boolean;
}

interface SessionUser extends User {
  jwt: string;
}
