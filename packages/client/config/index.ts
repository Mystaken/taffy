import { ConfigError } from './error';

export interface ClientConfig {
  API_DOMAIN: string;
  API_BASE_URL: string;
  GOOGLE_CLIENT_ID: string;
  FACEBOOK_APP_ID: string;
  ENV: 'development' | 'production';
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

console.log(validateEnvFile);

const domain =
  ENV === 'production'
    ? `${process.env.DOMAIN}/${process.env.PORT}`
    : 'http://localhost:4000';

export const config: Readonly<ClientConfig> = Object.freeze({
  API_DOMAIN: domain,
  API_BASE_URL: process.env.BASE_URL || '/api',
  GOOGLE_CLIENT_ID:
    process.env.GOOGLE_CLIENT_ID ||
    ('368211753081-ibhsiprvv8471fr464tcui6r7g23j4a1.apps.googleusercontent.com' as string),
  FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID || ('191106545598250' as string),
  ENV
});
