import Koa from 'koa';
import mount from 'koa-mount';
import Server from 'next/dist/next-server/server/next-server';
import { routes } from '../routes';
import { config } from '../../config';
import { setupNextApp } from './setup-next-app';
import { setupMiddlewares } from './setup-middlewares';
import { setupListeners } from './setup-listeners';
import { setupMongoose } from './setup-mongo';
import { logger } from '../utils/common/logger';

export const setup = async (nextApp?: Server): Promise<Koa<any, {}>> => {
  const app = new Koa();

  await setupMiddlewares(app, {});

  const router = await routes();
  const apiURL = config.BASE_URL;

  app.use(mount(apiURL, router.routes()));
  app.use(mount(apiURL, router.allowedMethods()));

  logger.info(`Routes mounted:\n${router.stack.map(i => i.path).join('\n')}`);
  await setupListeners(app, {});

  if (nextApp) {
    await setupNextApp(app, { nextApp });
  }

  await setupMongoose(app, {});

  return app;
};
