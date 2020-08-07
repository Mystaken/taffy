import Router from 'koa-router';
import koaMulter from '@koa/multer';

import { validateRequestPayload } from '../../../utils/api/validate-request-payload';
import { ComicPostRequestBody, comicPostSchema } from './schema';
import { createComic, NewComic } from '../../../services/comic/create-comic';
import { uploadToAWS } from './utils';
import { getRandomString } from '../../../utils/common/random';
import { ServerError } from '../../../errors/server.error';

const router = new Router();

const upload = koaMulter();

const uploadMiddleware = upload.fields([
  {
    name: 'coverImage',
    maxCount: 1
  },
  {
    name: 'desktopCoverImage',
    maxCount: 1
  },
  {
    name: 'mobileCoverImage',
    maxCount: 1
  },
  {
    name: 'comicBannerImage',
    maxCount: 1
  }
]);

router.post('/', uploadMiddleware, async ctx => {
  const reqBody = ctx.request.body;
  const body = {
    title: reqBody.title,
    description: reqBody.description,
    genres: reqBody.genres ? reqBody.genres.split(',') : [],
    categories: reqBody.categories ? reqBody.categories.split(',') : [],
    authors: reqBody.genres ? reqBody.authors.split(',') : []
  };

  let comicData = (await validateRequestPayload<ComicPostRequestBody>(
    body,
    comicPostSchema
  )) as NewComic;
  try {
    const files: Record<string, koaMulter.File[]> = ctx.files as any;
    const awsId = `${comicData.title}-${getRandomString(32)}`;
    const awsFileUrls = await uploadToAWS(awsId, files);
    const comicDataWithImages: NewComic = { ...comicData, ...awsFileUrls };
    const comic = await createComic(comicDataWithImages);
    ctx.body = comic;
  } catch (e) {
    throw new ServerError('Failed to create comic');
  }
});

export const comicPostRouter = router;
