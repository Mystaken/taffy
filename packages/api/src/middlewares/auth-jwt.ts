import koaJwt from 'koa-jwt';
import { config } from '../../config';

export const authJwt = () =>
  koaJwt({ secret: config.JWT_PRIVATE_KEY, passthrough: true });
