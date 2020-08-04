import Koa from 'koa';
import { VERSION } from '../utils/server/server-version';

export interface IAPIResponse {
  version: string;
  status: number;
}

export interface IAPISuccessResponse<T> extends IAPIResponse {
  response: T;
}

export const responseFormatter = <T = any>() => {
  return async (
    ctx: Koa.ParameterizedContext<any, {}>,
    next: () => Promise<any>
  ) => {
    await next();
    if (ctx.body) {
      ctx.body = {
        response: ctx.body,
        version: VERSION,
        status: 200
      } as IAPISuccessResponse<T>;
    }
  };
};
