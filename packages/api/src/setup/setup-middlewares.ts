import Koa from 'koa';
import { responseFormatter } from '../middlewares/response-formatter';
import { apiErrorHandler } from '../middlewares/api-error-handler';
import { bodyParser } from '../middlewares/body-parser';
import { logger } from '../utils/common/logger';

export const setupMiddlewares = async (app: Koa, _opt: {}) => {
  logger.debug('Setting up middlewares...');
  app.use(apiErrorHandler());
  app.use(responseFormatter());
  app.use(bodyParser());

  return app;
};
