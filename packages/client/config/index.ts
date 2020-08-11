import { ConfigError } from './error';

export interface ClientConfig {
  API_DOMAIN: string;
  API_BASE_URL: string;
  GOOGLE_CLIENT_ID: string;
  FACEBOOK_APP_ID: string;
  ENV: 'development' | 'production';
  STRIPE_KEY: string;
}

const ENV =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';

const validateEnvFile = () => {
  const errors: string[] = [];
  if (ENV === 'production') {
    if (!process.env.DOMAIN) {
      errors.push('DOMAIN');
    }
    if (!process.env.PORT) {
      errors.push('PORT');
    }
    if (!process.env.GOOGLE_CLIENT_ID) {
      errors.push('GOOGLE_CLIENT_ID');
    }
    if (!process.env.FACEBOOK_APP_ID) {
      errors.push('GOOGLE_CLIENT_ID');
    }
  }
  if (errors.length) {
    throw new ConfigError(
      `Missing required environment variables: ${errors.join(', ')}`
    );
  }
};

validateEnvFile();

const domain =
  ENV === 'production'
    ? `${process.env.DOMAIN}/${process.env.PORT}`
    : 'http://localhost:4000';

export const config: Readonly<ClientConfig> = Object.freeze({
  API_DOMAIN: domain,
  API_BASE_URL: process.env.API_BASE_URL as string,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID as string,
  FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID as string,
  STRIPE_KEY: process.env.STRIPE_KEY as string,
  ENV
});
