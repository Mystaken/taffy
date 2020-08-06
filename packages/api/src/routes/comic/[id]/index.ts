import Router from 'koa-router';
import { ComicGetByIdRequestQueryParam, comicGetByIdSchema } from './schema';
import { validateRequestPayload } from '../../../utils/api/validate-request-payload';
import { getComic } from '../../../services/comic/get-comic';

const router = new Router();

router.get('/:id', async ctx => {
  const params = await validateRequestPayload<ComicGetByIdRequestQueryParam>(
    ctx.params,
    comicGetByIdSchema
  );
  ctx.body = await getComic(params);
});

export const comicGetByIdRouter = router;
