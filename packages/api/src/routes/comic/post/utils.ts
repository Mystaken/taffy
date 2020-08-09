import { uploadFile } from '../../../s3/upload-file';
import koaMulter from '@koa/multer';
import { toJPG } from '../../../utils/images/file-to-jpg';
import { ServerError } from '../../../errors/server.error';

export interface AWSFile {
  url: string;
  key: string;
  bucket: string;
  etag: string;
}

export interface UploadToAWSResult {
  coverImage?: AWSFile;
  mobileCoverImage?: AWSFile;
  desktopCoverImage?: AWSFile;
  comicBannerImage?: AWSFile;
}

export const uploadToAWS = async (
  id: string,
  {
    coverImage,
    mobileCoverImage,
    desktopCoverImage,
    comicBannerImage
  }: Record<keyof UploadToAWSResult, koaMulter.File[]>
): Promise<UploadToAWSResult> => {
  try {
    const result: UploadToAWSResult = {};
    const requests: Promise<any>[] = [];

    if (coverImage) {
      requests.push(
        uploadFile({
          fileName: `${id}-cover-image.jpg`,
          file: await toJPG(coverImage[0].buffer)
        }).then(image => {
          result.coverImage = image;
        })
      );
    }

    if (mobileCoverImage) {
      requests.push(
        uploadFile({
          fileName: `${id}-mobile-cover-image.jpg`,
          file: await toJPG(mobileCoverImage[0].buffer)
        }).then(image => {
          result.mobileCoverImage = image;
        })
      );
    }
    if (desktopCoverImage) {
      requests.push(
        uploadFile({
          fileName: `${id}-desktop-cover-image.jpg`,
          file: await toJPG(desktopCoverImage[0].buffer)
        }).then(image => {
          result.desktopCoverImage = image;
        })
      );
    }

    if (comicBannerImage) {
      requests.push(
        uploadFile({
          fileName: `${id}-comic-banner-image.jpg`,
          file: await toJPG(comicBannerImage[0].buffer)
        }).then(image => {
          result.comicBannerImage = image;
        })
      );
    }

    await Promise.all(requests);

    return result;
  } catch (e) {
    throw new ServerError('Failed to upload file');
  }
};
