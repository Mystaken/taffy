import { resolve } from 'path';
import { config as dotEnv } from 'dotenv';

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
  STRIPE: {
    PUBLIC: string;
    SECRET: string;
  };
}

const ENV =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';

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
  },
  STRIPE: {
    PUBLIC: process.env.STRIPE_PUBLIC_KEY as string,
    SECRET: process.env.STRIPE_SECRET_KEY as string
  }
});
