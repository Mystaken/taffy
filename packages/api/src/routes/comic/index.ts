import Router from 'koa-router';

import { comicPostRouter } from './post';
import { comicGetRouter } from './get';
import { comicGetByIdRouter } from './[id]';

const router = new Router();

router.use(comicPostRouter.routes());
router.use(comicGetRouter.routes());
router.use(comicGetByIdRouter.routes());

export const comicRouter = router;
