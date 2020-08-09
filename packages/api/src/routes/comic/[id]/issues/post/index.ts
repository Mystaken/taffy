import Router from 'koa-router';
import koaMulter from '@koa/multer';

const router = new Router();

const upload = koaMulter();

router.post(
  '/:comicId/issues',
  upload.fields([
    {
      name: 'avatar',
      maxCount: 1
    }
  ]),
  async ctx => {
    ctx.body = 'success';
  }
);

export const comicIssuesPostRouter = router;
