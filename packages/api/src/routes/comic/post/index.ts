import Router from 'koa-router';

import { validateRequestPayload } from '../../../utils/api/validate-request-payload';
import { ComicPostRequestBody, comicPostSchema } from './schema';
import { createComic } from '../../../services/comic/create-comic';

const router = new Router();

router.post('/', async ctx => {
  const body = await validateRequestPayload<ComicPostRequestBody>(
    ctx.request.body,
    comicPostSchema
  );
  const comic = await createComic(body);
  ctx.body = comic;
});

export const comicPostRouter = router;
