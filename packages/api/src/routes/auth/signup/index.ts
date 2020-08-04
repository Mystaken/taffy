import Router from 'koa-router';
import { validateRequestPayload } from '../../../utils/api/validate-request-payload';
import { signUpSchema, SignInRequestBody } from './schema';
import { userExists } from '../../../services/users/user-exists';
import { ExistsError } from '../../../errors/exists.error';
import { createUser } from '../../../services/users/create-user';

const router = new Router();

router.post('/', async ctx => {
  const body = await validateRequestPayload<SignInRequestBody>(
    ctx.request.body,
    signUpSchema
  );
  if (await userExists({ email: body.email })) {
    throw new ExistsError('user');
  }
  ctx.body = await createUser(body);
});

export const signUpRouter = router;
