import { ServerError } from './server.error';

export class BadRequestError extends ServerError {
  constructor(...args: any) {
    super(...args);
    this.status = 400;
  }
}
