import { ServerError } from './server.error';

export class UnAuthorizedError extends ServerError {
  constructor(errors?: string, ...args: any) {
    const error = errors ?? 'Unauthorized';
    super(error, ...args);
    this.status = 401;
  }
}
