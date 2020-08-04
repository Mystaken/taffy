import Router from 'koa-router';
import { LoginRequestBody, loginSchema } from './schema';
import { validateRequestPayload } from '../../../utils/api/validate-request-payload';
import { getLoggedInUser } from '../../../services/users/get-user';

const router = new Router();

router.post('/', async ctx => {
  const body = await validateRequestPayload<LoginRequestBody>(
    ctx.request.body,
    loginSchema
  );
  ctx.body = await getLoggedInUser(body);
});

export const loginRouter = router;
