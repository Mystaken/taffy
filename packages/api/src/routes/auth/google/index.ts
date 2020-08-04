import Router from 'koa-router';
import { config } from '../../../../config';
import { googleClient } from './client';
import { ServerError } from '../../../errors/server.error';
import { TokenPayload } from 'google-auth-library';
import { BadRequestError } from '../../../errors/bad-request.error';
import { getGoogleUser } from '../../../services/users/get-user';
import { validateRequestPayload } from '../../../utils/api/validate-request-payload';
import { googleLoginSchema, GoogleLoginRequestBody } from './schema';
import { withJwtToken } from '../../../services/users/with-jwt-token';

const routes = new Router();

routes.post('/', async ctx => {
  const body = await validateRequestPayload<GoogleLoginRequestBody>(
    ctx.request.body,
    googleLoginSchema
  );

  let payload: TokenPayload | undefined;
  try {
    const ticket = await googleClient.verifyIdToken({
      idToken: body.idToken,
      audience: config.GOOGLE_CLIENT_ID
    });
    payload = ticket.getPayload();
  } catch (e) {
    throw new BadRequestError('Invalid or Expired ID token');
  }

  if (!payload) {
    throw new ServerError('Failed to connect with Google services.');
  }

  const user = await getGoogleUser(payload);

  ctx.body = await withJwtToken(user);
});

export const googleRouter = routes;
