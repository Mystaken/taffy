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
  isVIP: boolean;
}

interface SessionUser extends User {
  jwt: string;
}
