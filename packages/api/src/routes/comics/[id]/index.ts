import Router from 'koa-router';
import { comicIssuesRouter } from './issues';
import { comicGetByIdRouter } from './get';
import { comicPostByIdRouter } from './post';
import { comicsRatingsRouter } from './ratings';

const router = new Router();

router.use('/', comicGetByIdRouter.routes());
router.use('/', comicPostByIdRouter.routes());

router.use('/issues', comicIssuesRouter.routes());
router.use('/ratings', comicsRatingsRouter.routes());

export const comicsIdRouter = router;
