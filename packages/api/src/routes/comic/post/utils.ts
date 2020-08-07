import { uploadFile } from '../../../s3/upload-file';
import koaMulter from '@koa/multer';

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
  if (coverImage) {
    const image = await uploadFile({
      fileName: `${id}-cover-image`,
      file: coverImage[0].buffer
    });
    result.coverImage = image.url;
  }

  if (mobileCoverImage) {
    const image = await uploadFile({
      fileName: `${id}-mobile-cover-image`,
      file: mobileCoverImage[0].buffer
    });
    result.mobileCoverImage = image.url;
  }
  if (desktopCoverImage) {
    const image = await uploadFile({
      fileName: `${id}-desktop-cover-image`,
      file: desktopCoverImage[0].buffer
    });
    result.desktopCoverImage = image.url;
  }

  if (comicBannerImage) {
    const image = await uploadFile({
      fileName: `${id}-comic-banner-image`,
      file: comicBannerImage[0].buffer
    });
    result.comicBannerImage = image.url;
  }

  return result;
};
