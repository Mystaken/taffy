const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

module.exports = {
  env: {
    DOMAIN: process.env.DOMAIN,
    PORT: process.env.PORT,
    ENV: process.env.NODE_ENV,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
    STRIPE_KEY: process.env.STRIPE_PUBLIC_KEY,
    API_BASE_URL: process.env.BASE_URL
  }
};
