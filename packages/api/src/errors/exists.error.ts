import { ConflictError } from './conflict.error';
import { arrayify } from '../utils/common/arrayify';

export class ExistsError extends ConflictError {
  constructor(items: string | string[], ...args: any) {
    const errors = arrayify(items).map(item => `${item} exists`);
    super(errors, ...args);
  }
}
