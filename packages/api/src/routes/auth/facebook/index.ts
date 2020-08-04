import Router from 'koa-router';
import { getFacebookUserInformation, FacebookPayload } from './client';
import { validateRequestPayload } from '../../../utils/api/validate-request-payload';
import { FacebookLoginRequestBody, facebookLoginSchema } from './schema';
import { ServerError } from '../../../errors/server.error';
import { BadRequestError } from '../../../errors/bad-request.error';
import { getFacebookUser } from '../../../services/users/get-user';
import { withJwtToken } from '../../../services/users/with-jwt-token';

const routes = new Router();

routes.post('/', async ctx => {
  let payload: FacebookPayload | undefined;

  const body = await validateRequestPayload<FacebookLoginRequestBody>(
    ctx.request.body,
    facebookLoginSchema
  );

  try {
    payload = await getFacebookUserInformation(body.accessToken);
  } catch (e) {
    throw new BadRequestError('Invalid or Expired Access token');
  }

  if (!payload) {
    throw new ServerError('Failed to connect with Facebook services.');
  }

  const user = await getFacebookUser(payload);

  ctx.body = await withJwtToken(user);
});

export const facebookRouter = routes;
