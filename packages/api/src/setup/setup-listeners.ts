import Koa from 'koa';
import { logger } from '../utils/common/logger';

export const setupListeners = async (app: Koa, _opt: {}) => {
  logger.debug('Initializing listeners');
  app.on('error', error => {
    // Suppress error log when user disconnects the socket (page refresh/page load)
    if (error.code !== 'ECONNRESET' && error.code !== 'EPIPE') {
      logger.error(error);
    }
  });

  return app;
};
