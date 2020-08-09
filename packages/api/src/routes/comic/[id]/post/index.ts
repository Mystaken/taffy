import Router from 'koa-router';
import koaMulter from '@koa/multer';
import { ComicIdPostRequestBody, comicIdPostSchema } from './schema';
import { validateRequestPayload } from '../../../../utils/api/validate-request-payload';
import {
  UpdateComic,
  updateComic
} from '../../../../services/comic/update-comic';
import { uploadToAWS } from '../../post/utils';

const router = new Router();

const upload = koaMulter();

const uploadMiddleware = upload.any();

router.post('/', uploadMiddleware, async ctx => {
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
  const comic = await updateComic(comicId, comicDataWithImages);

  ctx.body = comic;
});

export const comicPostByIdRouter = router;
