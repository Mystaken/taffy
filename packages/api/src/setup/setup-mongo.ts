import mongoose from 'mongoose';
import Koa from 'koa';
import { config } from '../../config';
import { logger } from '../utils/common/logger';

const connect = async () => {
  const connection = await mongoose.connect(config.MONGO_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  return connection;
};

export const setupMongoose = async (app: Koa, _opt: {}) => {
  logger.debug('Connecting to mongo...');
  await connect();
  return app;
};
