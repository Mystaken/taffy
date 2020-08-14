import Router from 'koa-router';

import { getComic } from '../../../../services/comic/get-comic';
import { mapComic } from '../../../../services/comic/map-comic';
import { stripVipIssues } from '../../../../services/comic/strip-vip-issues';
import { isVipUser } from '../../../../services/users/privileges';
import { getUserFromCtx } from '../../../../services/users/get-user';

const router = new Router();

router.get('/', async ctx => {
  const user = await getUserFromCtx(ctx);
  const comic = await getComic({
    id: ctx.params.id
  });

  const queriedComics = mapComic(comic, { userId: user?.id });

  const isVip = user && (await isVipUser(user));

  ctx.body = isVip ? queriedComics : stripVipIssues(queriedComics);
});

export const comicGetByIdRouter = router;
