import { ServerError } from './server.error';
import { arrayify } from '../utils/common/arrayify';

export class NotFoundError extends ServerError {
  constructor(items: string | string[], ...args: any) {
    const errors = arrayify(items).map(item => `${item} not found`);
    super(errors, ...args);
    this.status = 404;
  }
}
