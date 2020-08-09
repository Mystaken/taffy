import { uploadFile } from '../../../s3/upload-file';
import koaMulter from '@koa/multer';
import { toJPG } from '../../../utils/images/file-to-jpg';

export interface UploadToAWSResult {
  coverImage?: string;
  mobileCoverImage?: string;
  desktopCoverImage?: string;
  comicBannerImage?: string;
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
  const result: UploadToAWSResult = {};
  const requests: Promise<any>[] = [];

  if (coverImage) {
    requests.push(
      uploadFile({
        fileName: `${id}-cover-image.jpg`,
        file: await toJPG(coverImage[0].buffer)
      }).then(image => {
        result.coverImage = image.url;
      })
    );
  }

  if (mobileCoverImage) {
    requests.push(
      uploadFile({
        fileName: `${id}-mobile-cover-image.jpg`,
        file: await toJPG(mobileCoverImage[0].buffer)
      }).then(image => {
        result.mobileCoverImage = image.url;
      })
    );
  }
  if (desktopCoverImage) {
    requests.push(
      uploadFile({
        fileName: `${id}-desktop-cover-image.jpg`,
        file: await toJPG(desktopCoverImage[0].buffer)
      }).then(image => {
        result.desktopCoverImage = image.url;
      })
    );
  }

  if (comicBannerImage) {
    requests.push(
      uploadFile({
        fileName: `${id}-comic-banner-image.jpg`,
        file: await toJPG(comicBannerImage[0].buffer)
      }).then(image => {
        result.comicBannerImage = image.url;
      })
    );
  }
  await Promise.all(requests);

  return result;
};
