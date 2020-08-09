import Router from 'koa-router';
import koaMulter from '@koa/multer';
import { validateRequestPayload } from '../../../../../utils/api/validate-request-payload';
import { comicIssuePostSchema, ComicIssuePostRequestBody } from './schema';
import { BadRequestError } from '../../../../../errors/bad-request.error';
import { getComic } from '../../../../../services/comic/get-comic';
import { uploadIssueToAWS } from './utils';
import { createComicIssue } from '../../../../../services/comic/issue/create-comic-issue';
import { ComicIssue } from '../../../../../models/comic.model';

const router = new Router();

const upload = koaMulter();
const uploadMiddleware = upload.any();

router.post('/', uploadMiddleware, async ctx => {
  const reqBody = ctx.request.body;
  const comicId: string = ctx.params.id;
  const body = {
    title: reqBody.title,
    membership: reqBody.membership
  };
  const comicIssueData = await validateRequestPayload<
    ComicIssuePostRequestBody
  >(body, comicIssuePostSchema);

  const comic = await getComic({ id: comicId });

  const files: koaMulter.File[] = ctx.files;
  const issueFile = files.find(file => file.fieldname === 'issue');
  const coverImageFile = files.find(file => file.fieldname === 'coverImage');
  if (!issueFile) {
    throw new BadRequestError('issue is required.');
  }
  if (!coverImageFile) {
    throw new BadRequestError('coverImageFile is required.');
  }

  const uploadedIssue = await uploadIssueToAWS(
    comic,
    comicIssueData,
    issueFile,
    coverImageFile
  );

  const issue: ComicIssue = {
    ...comicIssueData,
    pages: uploadedIssue.parts,
    coverImage: uploadedIssue.coverImage,
    originalImage: uploadedIssue.original
  };

  const newComic = await createComicIssue({ comicId: comic.id, issue });

  ctx.body = newComic;
});

export const comicIssuesPostRouter = router;
