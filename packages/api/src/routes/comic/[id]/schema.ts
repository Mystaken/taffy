import Joi from '@hapi/joi';

export const comicGetByIdSchema = Joi.object({
  id: Joi.string().required()
});

export interface ComicGetByIdRequestQueryParam {
  id: string;
}
