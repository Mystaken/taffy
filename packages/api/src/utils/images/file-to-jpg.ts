import sharp from 'sharp';

export const toJPG = async (file: string | Buffer): Promise<Buffer> => {
  return sharp(file)
    .toFormat('jpeg', {
      quality: 100,
      force: true
    })
    .toBuffer();
};
