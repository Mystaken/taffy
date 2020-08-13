import Router from 'koa-router';

import { addUserRating } from '../../../../../services/comic/ratings/add-user-rating';
import { User } from '../../../../../models/user.model';
import { UnAuthorizedError } from '../../../../../errors/unauthorized.error';
import { validateRequestPayload } from '../../../../../utils/api/validate-request-payload';
import { comicsRatingsPostSchema, ComicRatingsPostRequestBody } from './schema';
import { isVipUser } from '../../../../../services/users/privileges';
import { stripVipIssues } from '../../../../../services/comic/strip-vip-issues';

const router = new Router();

router.post('/', async ctx => {
  const user: User | undefined = ctx.state.user;
  if (!user) {
    throw new UnAuthorizedError();
  }
  const comicId: string = ctx.params.id;
  const body = await validateRequestPayload<ComicRatingsPostRequestBody>(
    ctx.request.body,
    comicsRatingsPostSchema
  );

  const comic = await addUserRating(comicId, user.id, body.rating);

  const isVip = user && (await isVipUser(user));

  ctx.body = isVip ? comic : stripVipIssues(comic);
});

export const comicsRatingsPostRouter = router;
