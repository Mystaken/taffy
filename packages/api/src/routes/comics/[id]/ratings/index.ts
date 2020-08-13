import Router from 'koa-router';
import { comicsRatingsPostRouter } from './post';

const router = new Router();

router.use('/', comicsRatingsPostRouter.routes());

export const comicsRatingsRouter = router;
