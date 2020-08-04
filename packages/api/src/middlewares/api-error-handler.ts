import Koa from 'koa';
import { IAPIResponse } from './response-formatter';
import { ServerError } from '../errors/server.error';
import { VERSION } from '../utils/server/server-version';
import { logger } from '../utils/common/logger';

export interface IAPIErrorResponse extends IAPIResponse {
  errors: any[];
}

export const apiErrorHandler = () => {
  return async (
    ctx: Koa.ParameterizedContext<any, {}>,
    next: () => Promise<any>
  ) => {
    try {
      await next();
    } catch (e) {
      let error: ServerError;
      if (e instanceof ServerError) {
        error = e;
      } else {
        logger.fatal(e);
        error = new ServerError();
      }
      ctx.status = error.status;
      ctx.body = {
        errors: error.errors,
        version: VERSION,
        status: error.status
      } as IAPIErrorResponse;
    }
  };
};
