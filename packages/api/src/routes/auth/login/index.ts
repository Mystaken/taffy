import Router from 'koa-router';

import { LoginRequestBody, loginSchema } from './schema';
import { validateRequestPayload } from '../../../utils/api/validate-request-payload';
import { getLoggedInUser } from '../../../services/users/get-user';
import { withJwtToken } from '../../../services/users/with-jwt-token';

const router = new Router();

router.post('/', async ctx => {
  const body = await validateRequestPayload<LoginRequestBody>(
    ctx.request.body,
    loginSchema
  );
  const user = await getLoggedInUser(body);
  const jwtUser = await withJwtToken(user);

  ctx.body = jwtUser;
});

export const loginRouter = router;
