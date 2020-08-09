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
}

interface SessionUser extends User {
  jwt: string;
}
