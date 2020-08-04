import { validateRequestPayload } from './validate-request-payload';
import Joi from '@hapi/joi';
import { BadRequestError } from '../../errors/bad-request.error';

describe('validate-request-payload', () => {
  it('should return the correct type if it matches schema', async () => {
    const schema = Joi.object({ a: Joi.string().required() });

    expect(await validateRequestPayload({ a: 'test' }, schema)).toStrictEqual({
      a: 'test'
    });
  });

  it('should throw BadRequestError if it does not match schema', () => {
    const schema = Joi.string();
    expect(validateRequestPayload({ a: '' }, schema)).rejects.toBeInstanceOf(
      BadRequestError
    );
  });

  it('should throw BadRequestError if object is null', () => {
    const schema = Joi.string();
    expect(validateRequestPayload(null, schema)).rejects.toBeInstanceOf(
      BadRequestError
    );
  });
});
