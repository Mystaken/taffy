import Router from 'koa-router';

import { validateRequestPayload } from '../../../utils/api/validate-request-payload';
import { ComicGetRequestQueryParam, comicGetSchema } from './schema';
import { queryComicEntry } from '../../../services/comic/query-comic';
import { stripVipIssues } from '../../../services/comic/strip-vip-issues';
import { isVipUser } from '../../../services/users/privileges';
import { getUserFromCtx } from '../../../services/users/get-user';

const router = new Router();

router.get('/', async ctx => {
  const user = await getUserFromCtx(ctx);
  const params = await validateRequestPayload<ComicGetRequestQueryParam>(
    ctx.request.query,
    comicGetSchema
  );
  const comics = await queryComicEntry(params, { userId: user?.id });
  const isVip = user && (await isVipUser(user));

  ctx.body = isVip ? comics : comics.map(stripVipIssues);
});

export const comicsGetRouter = router;
