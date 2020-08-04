import { ServerError } from './server.error';

export class ConflictError extends ServerError {
  constructor(...args: any) {
    super(...args);
    this.status = 409;
  }
}
