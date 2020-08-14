import Koa from 'koa';
import { load } from 'yamljs';
import { resolve } from 'path';
import Router from 'koa-router';
import koaSwagger from 'koa2-swagger-ui';
import { logger } from '../utils/common/logger';

export const setupDocs = async (app: Koa, _opt: {}) => {
  logger.info('Mounting docs at /docs');
  const schemaPath = resolve(__dirname, '../../docs/schema.yaml');
  const spec = load(schemaPath);
  const router = new Router({ prefix: '/' });
  router.get(
    'docs',
    koaSwagger({
      title: 'Taffy API Docs',
      routePrefix: false,
      swaggerOptions: {
        supportedSubmitMethods: ['get', 'head'],
        spec
      }
    }) as any
  );
  app.use(router.routes());
  return app;
};
