import Router from 'koa-router';
import { signUpRouter } from './signup';
import { loginRouter } from './login';
import { googleRouter } from './google';
import { facebookRouter } from './facebook';

const router = new Router();

router.use('/signup', signUpRouter.routes());
router.use('/login', loginRouter.routes());
router.use('/google', googleRouter.routes());
router.use('/facebook', facebookRouter.routes());

export const authRouter = router;
