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
  const comicId = ctx.params.id;
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
  const files: Record<string, koaMulter.File[]> = ctx.files as any;
  const awsId = comicData.title;
  const awsFileUrls = await uploadToAWS(awsId, files);
  const comicDataWithImages: UpdateComic = { ...comicData, ...awsFileUrls };
  const comic = await updateComic(comicId, comicDataWithImages);
  ctx.body = comic;
});

export const comicPostRouter = router;
