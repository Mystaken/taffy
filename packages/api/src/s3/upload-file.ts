import { s3Client, AWS_S3 } from './client';

export interface UploadFileParams {
  fileName: string;
  file: string | Buffer | Uint8Array | Blob;
}

export const uploadFile = async ({ file, fileName }: UploadFileParams) => {
  console.log({ file, fileName });
  const result = await s3Client
    .upload({
      Bucket: AWS_S3.BUCKET_NAME,
      Key: fileName,
      Body: file,
      ACL: 'public-read'
    })
    .promise();
  return {
    url: result.Location,
    key: result.Key,
    bucket: result.Bucket,
    etag: result.ETag
  };
};
