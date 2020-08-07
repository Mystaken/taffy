import Router from 'koa-router';
import { getComic } from '../../../services/comic/get-comic';
import { comicIssuesRouter } from './issues';

const router = new Router();

router.get('/:comicId', async ctx => {
  ctx.body = await getComic({
    id: ctx.params.comicId
  });
});

router.use(comicIssuesRouter.routes());

export const comicGetByIdRouter = router;
