import Router from 'koa-router';
import { comicIssuesPostRouter } from './post';

const router = new Router();

router.use(comicIssuesPostRouter.routes());

export const comicIssuesRouter = router;
