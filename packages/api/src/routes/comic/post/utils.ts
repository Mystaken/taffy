import koaMulter from '@koa/multer';
import { uploadFile } from '../../../s3/upload-file';
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
  files: koaMulter.File[]
): Promise<UploadToAWSResult> => {
  try {
    const result: UploadToAWSResult = {};
    const requests: Promise<any>[] = files.map(async f => {
      switch (f.fieldname) {
        case 'coverImage':
          return uploadFile({
            fileName: `${id}-cover-image.jpg`,
            file: await toJPG(f.buffer)
          }).then(image => {
            result.coverImage = image;
          });
        case 'mobileCoverImage':
          return uploadFile({
            fileName: `${id}-mobile-cover-image.jpg`,
            file: await toJPG(f.buffer)
          }).then(image => {
            result.mobileCoverImage = image;
          });

        case 'desktopCoverImage':
          return uploadFile({
            fileName: `${id}-desktop-cover-image.jpg`,
            file: await toJPG(f.buffer)
          }).then(image => {
            result.desktopCoverImage = image;
          });

        case 'comicBannerImage':
          return uploadFile({
            fileName: `${id}-comic-banner-image.jpg`,
            file: await toJPG(f.buffer)
          }).then(image => {
            result.comicBannerImage = image;
          });
      }
    });

    await Promise.all(requests);

    return result;
  } catch (e) {
    console.log(e);
    throw new ServerError('Failed to edit comic');
  }
};
