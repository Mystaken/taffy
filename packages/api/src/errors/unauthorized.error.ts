import { ServerError } from './server.error';

export class UnAuthorizedError extends ServerError {
  constructor(...args: any) {
    super(...args);
    this.status = 401;
  }
}
