import { Schema, ValidationError } from '@hapi/joi';
import { BadRequestError } from '../../errors/bad-request.error';

export const validateRequestPayload = async <TResult>(
  object: any,
  schema: Schema
): Promise<TResult> => {
  const obj: Object = object || {};
  try {
    const value = await schema.validateAsync(obj);
    return value as TResult;
  } catch (err) {
    const error = err as ValidationError;
    throw new BadRequestError(error.details.map(e => e.message));
  }
};
