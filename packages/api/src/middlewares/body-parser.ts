import koaBodyParser from 'koa-bodyparser';
import convert from 'koa-convert';
import { BadRequestError } from '../errors/bad-request.error';

export const bodyParser = () =>
  convert(
    koaBodyParser({
      onerror(_err) {
        throw new BadRequestError('Failed to parse JSON body');
      }
    })
  );
