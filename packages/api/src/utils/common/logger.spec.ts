import { isProduction } from '../server/is-production';

jest.mock('pino', () => ({
  __esModule: true,
  default: (opt: any) => opt
}));

jest.mock('../server/is-production', () => ({
  isProduction: jest.fn(() => true)
}));

describe('logger', () => {
  afterEach(() => {
    jest.clearAllMocks().resetModules();
  });

  describe('development', () => {
    (isProduction as jest.Mock).mockImplementation(() => false);
    it('should be created', () => {
      const { logger } = require('./logger');
      expect(logger).toStrictEqual({
        prettyPrint: {
          colorize: true,
          translateTime: true,
          ignore: 'hostname,pid'
        }
      });
    });
  });
  describe('production', () => {
    it('should be created', () => {
      const { logger } = require('./logger');
      expect(logger).toStrictEqual({});
    });
  });
});
