import Pino from 'pino';
import { isProduction } from '../server/is-production';

const opts = isProduction()
  ? {}
  : {
      prettyPrint: {
        colorize: true,
        translateTime: true,
        ignore: 'hostname,pid'
      }
    };

export const logger = Pino(opts);
