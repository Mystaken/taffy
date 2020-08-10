import Router from 'koa-router';
import { getComic } from '../../../../services/comic/get-comic';
import { mapComic } from '../../../../services/comic/map-comic';

const router = new Router();

router.get('/', async ctx => {
  const comic = await getComic({
    id: ctx.params.id
  });

  const queriedComics = mapComic(comic);

  ctx.body = queriedComics;
});

export const comicGetByIdRouter = router;
