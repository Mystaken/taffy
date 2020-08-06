import AWS from 'aws-sdk';
import { config } from '../../config';

export const { AWS_S3 } = config;

export const s3Client = new AWS.S3({
  accessKeyId: AWS_S3.ACCESS_KEY,
  secretAccessKey: AWS_S3.SECRET
});
