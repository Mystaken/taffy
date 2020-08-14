import Router from 'koa-router';
import koaMulter from '@koa/multer';

import { ComicIdPostRequestBody, comicIdPostSchema } from './schema';
import { validateRequestPayload } from '../../../../utils/api/validate-request-payload';
import {
  UpdateComic,
  updateComic
} from '../../../../services/comic/update-comic';
import { uploadToAWS } from '../../post/utils';
import { isAdminUser } from '../../../../services/users/privileges';
import { UnAuthorizedError } from '../../../../errors/unauthorized.error';
import { getUserFromCtx } from '../../../../services/users/get-user';

const router = new Router();

const upload = koaMulter();

const uploadMiddleware = upload.any();

router.post('/', uploadMiddleware, async ctx => {
  const user = await getUserFromCtx(ctx);
  if (!user || !(await isAdminUser(user))) {
    throw new UnAuthorizedError();
  }

  const reqBody = ctx.request.body;
  const comicId: string = ctx.params.id;

  const files: koaMulter.File[] = ctx.files;

  const body = {
    title: reqBody.title,
    description: reqBody.description,
    genres: reqBody.genres ? reqBody.genres.split(',') : [],
    categories: reqBody.categories ? reqBody.categories.split(',') : [],
    authors: reqBody.genres ? reqBody.authors.split(',') : []
  };

  let comicData = (await validateRequestPayload<ComicIdPostRequestBody>(
    body,
    comicIdPostSchema
  )) as UpdateComic;

  const awsId = comicData.title;
  const awsFileUrls = await uploadToAWS(awsId, files);
  const comicDataWithImages: UpdateComic = { ...comicData, ...awsFileUrls };
  const comic = await updateComic(comicId, comicDataWithImages, {
    userId: user.id
  });

  ctx.body = comic;
});

export const comicPostByIdRouter = router;
