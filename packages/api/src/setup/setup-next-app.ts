import Koa from 'koa';
import Server from 'next/dist/next-server/server/next-server';
import { config } from '../../config';
import { logger } from '../utils/common/logger';

export interface SetupNextAppOptions {
  nextApp: Server;
}

export const setupNextApp = async (
  app: Koa<any, {}>,
  { nextApp }: SetupNextAppOptions
) => {
  logger.debug('Setting up Next App');
  const handle = nextApp.getRequestHandler();

  app.use(async (ctx, next) => {
    if (ctx.url.startsWith(config.BASE_URL) || ctx.method !== 'GET') {
      return next();
    } else if (!ctx.state.token && !ctx.url.startsWith('/login')) {
      ctx.redirect('/login');
    }

    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  return app;
};
