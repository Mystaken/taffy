import koaMulter from '@koa/multer';
import sharp from 'sharp';
import { ComicIssuePostRequestBody } from './schema';
import { BadRequestError } from '../../../../../errors/bad-request.error';
import { splitImageVertically } from '../../../../../utils/images/split-image';
import { TComicModel } from '../../../../../models/comic.model';
import { uploadFile } from '../../../../../s3/upload-file';
import { toJPG } from '../../../../../utils/images/file-to-jpg';

const ISSUE_HEIGHT_PART = 1200;
const ISSUE_WIDTH = 800;

export const uploadIssueToAWS = async (
  comic: TComicModel,
  comicIssueData: ComicIssuePostRequestBody,
  issueFile: koaMulter.File,
  coverImageFile: koaMulter.File
) => {
  let fileBuffer = issueFile.buffer;
  const { width = 0, height = 0 } = await sharp(issueFile.buffer).metadata();
  if (width < ISSUE_WIDTH) {
    throw new BadRequestError(`Issues must be of width ${ISSUE_WIDTH}px`);
  } else if (width > ISSUE_WIDTH) {
    fileBuffer = await sharp(fileBuffer)
      .extract({
        left: 0,
        top: 0,
        width: ISSUE_WIDTH,
        height: height
      })
      .toBuffer();
  }
  const issueSplit = await splitImageVertically(fileBuffer, {
    heightPerPart: ISSUE_HEIGHT_PART
  });

  const uploadedIssueParts = issueSplit.map(async (issue, index) =>
    uploadFile({
      fileName: `${comic.id}-${comicIssueData.title}-${index}.jpg`,
      file: await toJPG(issue)
    })
  );
  const uploadedOriginalIssue = await uploadFile({
    fileName: `${comic.id}-${comicIssueData.title}-original.jpg`,
    file: await toJPG(fileBuffer)
  });

  const uploadedCoverImage = await uploadFile({
    fileName: `${comic.id}-${comicIssueData.title}-cover-image.jpg`,
    file: await toJPG(coverImageFile.buffer)
  });

  return {
    parts: await Promise.all(uploadedIssueParts),
    original: uploadedOriginalIssue,
    coverImage: uploadedCoverImage
  };
};
