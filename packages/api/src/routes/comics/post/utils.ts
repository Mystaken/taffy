import koaMulter from '@koa/multer';
import { uploadFile } from '../../../services/s3/upload-file';
import { toJPG, toPNG } from '../../../utils/images/file-to-jpg';
import { ServerError } from '../../../errors/server.error';

export interface AWSFile {
  url: string;
  key: string;
  bucket: string;
  etag: string;
}

export interface UploadToAWSResult {
  cardImage?: AWSFile;
  mobileCoverImage?: AWSFile;
  desktopBackgroundImage?: AWSFile;
  desktopForegroundImage?: AWSFile;
  bannerImage?: AWSFile;
}

export const uploadToAWS = async (
  id: string,
  files: koaMulter.File[]
): Promise<UploadToAWSResult> => {
  try {
    const result: UploadToAWSResult = {};
    const requests: Promise<any>[] = files.map(async f => {
      switch (f.fieldname) {
        case 'cardImage':
          return uploadFile({
            fileName: `${id}-card-image.jpg`,
            file: await toJPG(f.buffer)
          }).then(image => {
            result.cardImage = image;
          });
        case 'mobileCoverImage':
          return uploadFile({
            fileName: `${id}-mobile-cover-image.jpg`,
            file: await toJPG(f.buffer)
          }).then(image => {
            result.mobileCoverImage = image;
          });

        case 'desktopBackgroundImage':
          return uploadFile({
            fileName: `${id}-desktop-background-image.jpg`,
            file: await toJPG(f.buffer)
          }).then(image => {
            result.desktopBackgroundImage = image;
          });

        case 'desktopForegroundImage':
          return uploadFile({
            fileName: `${id}-desktop-foreground-image.png`,
            file: await toPNG(f.buffer)
          }).then(image => {
            result.desktopForegroundImage = image;
          });

        case 'bannerImage':
          return uploadFile({
            fileName: `${id}-banner-image.jpg`,
            file: await toJPG(f.buffer)
          }).then(image => {
            result.bannerImage = image;
          });
      }
    });

    await Promise.all(requests);

    return result;
  } catch (e) {
    throw new ServerError('Failed to edit comic');
  }
};
