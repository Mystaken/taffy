import { start } from './src/server';

const main = async () => {
  await start();
};
main();
// import sharp from 'sharp';
// import fs from 'fs';

// const main = async () => {
//   const file = fs.readFileSync('./800x4312.png');
//   const { height = 0 } = await sharp(file).metadata();
//   const extendHeight = 1200 - (height % 1200);
//   const sharpFile = sharp(file).extend({
//     bottom: extendHeight,
//     background: { r: 0, g: 0, b: 0 }
//   });
//   const { height = 0 } = await sharpFile.clone().metadata();

//   console.log(extendHeight);
//   // await sharp(a)
//   //   .extract({ left: 0, top: 0, width: 800, height: 5000 })
//   //   .toFile('./test.png');
// };

// main();
