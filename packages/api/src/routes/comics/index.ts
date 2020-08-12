import Router from 'koa-router';

import { comicsPostRouter } from './post';
import { comicsGetRouter } from './get';
import { comicsIdRouter } from './[id]';

const router = new Router();

router.use('/', comicsPostRouter.routes());
router.use('/', comicsGetRouter.routes());
router.use('/:id', comicsIdRouter.routes());

export const comicsRouter = router;
