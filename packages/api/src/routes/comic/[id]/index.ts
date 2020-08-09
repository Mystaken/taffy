import Router from 'koa-router';
import { getComic } from '../../../services/comic/get-comic';
import { comicIssuesRouter } from './issues';
import { comicGetByIdRouter } from './get';
import { comicPostByIdRouter } from './post';

const router = new Router();

router.get('/', async ctx => {
  ctx.body = await getComic({
    id: ctx.params.id
  });
});

router.use(comicGetByIdRouter.routes());
router.use(comicPostByIdRouter.routes());
router.use(comicIssuesRouter.routes());

export const comicIdRouter = router;
