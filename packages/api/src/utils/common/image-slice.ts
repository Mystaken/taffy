import sharp from 'sharp';
import { BadRequestError } from '../../errors/bad-request.error';

export interface ImageSliceParams {
  height: number;
}

export const imageSlice = ({ height }: ImageSliceParams) => async (
  file: string | Buffer
) => {
  if (height <= 0) {
    throw new BadRequestError('height should be positive number.');
  }
  const meta = await sharp(file).metadata();
  const extendHeight = height - (meta.height ?? 0 % height);
};
