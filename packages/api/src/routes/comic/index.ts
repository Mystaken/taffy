import Router from 'koa-router';

import { comicPostRouter } from './post';
import { comicGetRouter } from './get';

const router = new Router();

router.use('/', comicPostRouter.routes());
router.use('/', comicGetRouter.routes());

export const comicRouter = router;
