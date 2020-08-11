import Router from 'koa-router';

import { getComic } from '../../../../services/comic/get-comic';
import { mapComic } from '../../../../services/comic/map-comic';
import { User } from '../../../../models/user.model';
import { stripVipIssues } from '../../../../services/comic/strip-vip-issues';

const router = new Router();

router.get('/', async ctx => {
  const user: User | undefined = ctx.state.user;
  const comic = await getComic({
    id: ctx.params.id
  });

  const queriedComics = mapComic(comic);

  const isVIP = user && user.isVIP;

  ctx.body = isVIP ? queriedComics : stripVipIssues(queriedComics);
});

export const comicGetByIdRouter = router;
