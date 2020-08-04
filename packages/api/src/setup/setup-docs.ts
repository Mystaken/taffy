import Koa from 'koa';
import { load } from 'yamljs';
import { resolve } from 'path';
import Router from 'koa-router';
import koaSwagger from 'koa2-swagger-ui';

export const setupDocs = async (app: Koa<any, {}>, _opt: {}) => {
  const schemaPath = resolve(__dirname, '../../docs/schema.yaml');
  const spec = load(schemaPath);
  const router = new Router({ prefix: '/' });
  router.get(
    'docs',
    koaSwagger({
      title: 'Taffy API Docs',
      routePrefix: false,
      swaggerOptions: {
        spec
      }
    })
  );
  app.use(router.routes());
  console.log(router.stack.map(i => i.path).join('\n'));
  return app;
};
