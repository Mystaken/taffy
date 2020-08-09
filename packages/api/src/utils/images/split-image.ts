import sharp from 'sharp';

export interface SplitImageOptions {
  heightPerPart: number;
}
export const splitImageVertically = async (
  file: string | Buffer,
  { heightPerPart }: SplitImageOptions
) => {
  const meta = await sharp(file).metadata();
  const extendHeight = heightPerPart - ((meta.height ?? 0) % heightPerPart);

  const extendedFileImage = await sharp(file)
    .extend({
      top: 0,
      left: 0,
      right: 0,
      bottom: extendHeight,
      background: 'white'
    })
    .toBuffer();

  const sharpFile = sharp(extendedFileImage);

  const { height = 0, width = 0 } = await sharpFile.clone().metadata();
  let currHeight = 0;
  const parts: Promise<Buffer>[] = [];
  while (currHeight < height) {
    parts.push(
      sharpFile
        .clone()
        .extract({
          left: 0,
          top: currHeight,
          width: width,
          height: heightPerPart
        })
        .toBuffer()
    );
    currHeight += heightPerPart;
  }
  return Promise.all(parts);
};
