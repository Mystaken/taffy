interface User {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  active: boolean;
  id: string;
  createdAt: string;
  updatedAt: string;
  lastLogin: string;
}

interface SessionUser extends User {
  jwt: string;
}
