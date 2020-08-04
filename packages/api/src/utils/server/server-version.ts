import { hashSync } from 'bcrypt';

const version = hashSync(new Date().toString(), 10);

export const VERSION = version.slice(version.lastIndexOf('$') + 1);
