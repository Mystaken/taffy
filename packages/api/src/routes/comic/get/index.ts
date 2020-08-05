import Router from 'koa-router';

import { validateRequestPayload } from '../../../utils/api/validate-request-payload';
import { ComicGetRequestQueryParam, comicGetSchema } from './schema';
import { queryComicEntry } from '../../../services/comic/query-comic';

const router = new Router();

router.get('/', async ctx => {
  const params = await validateRequestPayload<ComicGetRequestQueryParam>(
    ctx.request.query,
    comicGetSchema
  );
  ctx.body = await queryComicEntry(params);
});

export const comicGetRouter = router;
