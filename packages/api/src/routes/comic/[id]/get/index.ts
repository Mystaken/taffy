import Router from 'koa-router';
import { getComic } from '../../../../services/comic/get-comic';

const router = new Router();

router.get('/', async ctx => {
  ctx.body = await getComic({
    id: ctx.params.id
  });
});

export const comicGetByIdRouter = router;
