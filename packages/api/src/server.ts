import { setup } from './setup';
import Server from 'next/dist/next-server/server/next-server';
import { config } from '../config';
import { VERSION } from './utils/server/server-version';
import { logger } from './utils/common/logger';

export const start = async (nextApp?: Server) => {
  const { DOMAIN, PORT } = config;
  logger.info(
    `Starting server with configs:\n ${JSON.stringify(config, null, 2)}`
  );
  const server = await setup(nextApp);

  return new Promise(resolve => {
    server.listen(PORT, () => {
      const domain = config.ENV === 'production' ? DOMAIN : `${DOMAIN}:${PORT}`;
      logger.info(`Server started on ${domain} (Vers. ${VERSION})`);
      resolve(server);
    });
  });
};
