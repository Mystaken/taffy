import Router from 'koa-router';

import { validateRequestPayload } from '../../../utils/api/validate-request-payload';
import { ComicGetRequestQueryParam, comicGetSchema } from './schema';
import { queryComicEntry } from '../../../services/comic/query-comic';
import { User } from '../../../models/user.model';
import { stripVipIssues } from '../../../services/comic/strip-vip-issues';
import { isVipUser } from '../../../services/users/privileges';

const router = new Router();

router.get('/', async ctx => {
  const user: User | undefined = ctx.state.user;
  const params = await validateRequestPayload<ComicGetRequestQueryParam>(
    ctx.request.query,
    comicGetSchema
  );
  const comics = await queryComicEntry(params);
  const isVip = user && (await isVipUser(user));

  ctx.body = isVip ? comics : comics.map(stripVipIssues);
});

export const comicGetRouter = router;
