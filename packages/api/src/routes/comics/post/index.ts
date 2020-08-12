import Router from 'koa-router';
import koaMulter from '@koa/multer';

import { validateRequestPayload } from '../../../utils/api/validate-request-payload';
import { ComicPostRequestBody, comicPostSchema } from './schema';
import { createComic, NewComic } from '../../../services/comic/create-comic';
import { uploadToAWS } from './utils';
import { User } from '../../../models/user.model';
import { UnAuthorizedError } from '../../../errors/unauthorized.error';
import { isAdminUser } from '../../../services/users/privileges';

const router = new Router();

const upload = koaMulter();

const uploadMiddleware = upload.any();

router.post('/', uploadMiddleware, async ctx => {
  const user: User | undefined = ctx.state.user;
  if (!user || !(await isAdminUser(user))) {
    throw new UnAuthorizedError();
  }

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

  const files: koaMulter.File[] = ctx.files as any;

  const awsId = comicData.title;
  const awsFileUrls = await uploadToAWS(awsId, files);
  const comicDataWithImages: NewComic = { ...comicData, ...awsFileUrls };
  const comic = await createComic(comicDataWithImages);
  ctx.body = comic;
});

export const comicsPostRouter = router;