import Router from 'koa-router';
import { currentUserRouter } from './me';

const router = new Router();

router.use('/me', currentUserRouter.routes());

export const userRoute = router;
