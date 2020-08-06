import { s3Client, AWS_S3 } from './client';

export interface UploadFileParams {
  fileName: string;
  file: string | Buffer | Uint8Array | Blob;
}

export const uploadFile = async ({ file, fileName }: UploadFileParams) => {
  const result = await s3Client
    .upload({
      Bucket: AWS_S3.BUCKET_NAME,
      Key: fileName,
      Body: file
    })
    .promise();
  return {
    url: result.Location
  };
};
