import { arrayify } from '../utils/common/arrayify';

export class ServerError extends Error {
  public status: number = 500;
  public errors: string[] = ['Internal Server Error'];

  constructor(errors?: string | string[], ...args: any) {
    super(args);
    if (errors) {
      this.errors = arrayify(errors);
    }
  }
}
