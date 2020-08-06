import { resolve } from 'path';
import { config as dotEnv } from 'dotenv';
import { ConfigError } from './error';

dotEnv({ path: resolve(__dirname, '../../../.env') });

export interface APIConfig {
  DOMAIN: string;
  PORT: number;
  BASE_URL: string;
  GOOGLE_CLIENT_ID: string;
  DOC_PATH: string;
  MONGO_CONNECTION: string;
  JWT_PRIVATE_KEY: string;
  ENV: 'development' | 'production';
  AWS_S3: {
    BUCKET_NAME: string;
    ACCESS_KEY: string;
    SECRET: string;
  };
}

const ENV =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';

const validateEnvFile = () => {
  const errors: string[] = [];
  if (!process.env.GOOGLE_CLIENT_ID) {
    errors.push('GOOGLE_CLIENT_ID');
  }
  if (!process.env.MONGO_CONNECTION) {
    errors.push('MONGO_CONNECTION');
  }
  if (!process.env.BUCKET_NAME) {
    errors.push('BUCKET_NAME');
  }
  if (!process.env.S3_ACCESS_KEY) {
    errors.push('MONGO_CONNECTION');
  }
  if (!process.env.S3_SECRET) {
    errors.push('MONGO_CONNECTION');
  }
  if (ENV === 'production') {
    if (!process.env.DOMAIN) {
      errors.push('DOMAIN');
    }
    if (!process.env.PORT) {
      errors.push('PORT');
    }
    if (!process.env.JWT_PRIVATE_KEY) {
      errors.push('JWT_PRIVATE_KEY');
    }
  }
  if (errors.length) {
    throw new ConfigError(
      `Missing required environment variables: ${errors.join(', ')}`
    );
  }
};

validateEnvFile();

export const config: Readonly<APIConfig> = Object.freeze({
  DOMAIN: process.env.DOMAIN || ('http://localhost' as string),
  PORT: parseInt(process.env.PORT || '3000', 10),
  BASE_URL: process.env.BASE_URL || '/api',
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID as string,
  DOC_PATH: resolve(__dirname, '../doc'),
  MONGO_CONNECTION: process.env.MONGO_CONNECTION as string,
  JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY || ('jwt-private-key' as string),
  ENV,
  AWS_S3: {
    BUCKET_NAME: process.env.BUCKET_NAME as string,
    ACCESS_KEY: process.env.S3_ACCESS_KEY as string,
    SECRET: process.env.S3_SECRET as string
  }
});
