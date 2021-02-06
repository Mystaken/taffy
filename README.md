
# Taffy

## .env setup
* Create `.env` file with following fields. You can use `.env.tempate` as reference but don't expect it to work.

### DOMAIN
* Usually localhost, but update this when you deploy it.

### PORT
* Only useful in development mode. In production, this field is ignored. Logic to generate app's base URL:
`NODE_ENV === "production" ? DOMAIN : ${DOMAIN}:${PORT}`

### JWT_PRIVATE_KEY
* Used to generate cookie based authentication. You can use any string

### BASE_URL
* The url prepended to API routes.

### GOOGLE_CLIENT_ID
* Make Google `OAuth Client ID` here: https://console.developers.google.com/apis/credentials?project=the-signal-268104
* Make it for `Application Type: Web Application`
 * Just in case, authorize both the backend endpoint and front end endpoint for JavaScript origins and redirect URIs

### Facebook 
* Create Facebook developer app here: https://developers.facebook.com/
* Configure the site URL to match your front end endpoint.

### MONGO_CONNECTION
* Create mongoDB wherever you choose to and get the connection string.

### AWS S3 Bucket
* Create S3 Bucket: https://aws.amazon.com/s3/
* Get bucket name, secret, and access key

### Stripe
* Create Stripe account and get both access key and secret. If you're working in development mode, make sure you get the **test Stripe keys** instead. They normally have the string **test** in them.
* For webhooks, you can also set it up. Refer to: https://stripe.com/docs/webhooks. App will still work without webhooks but data will not update if Stripe updates.

