import { s3Client } from './client';
import { ServerError } from '../../errors/server.error';

export interface RemoveFileParams {
  bucket: string;
  key: string;
}
export const removeFile = async ({ bucket, key }: RemoveFileParams) => {
  const result = await s3Client
    .deleteObject({
      Bucket: bucket,
      Key: key
    })
    .promise();
  if (!result.$response.data) {
    throw new ServerError('Failed to remove file.');
  }
  return result.$response.data;
};
