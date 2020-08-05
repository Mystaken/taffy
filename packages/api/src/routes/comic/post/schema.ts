import Joi from '@hapi/joi';

export const comicPostSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  genres: Joi.array().items(Joi.string()).required(),
  categories: Joi.array().items(Joi.string()).required(),
  authors: Joi.array().items(Joi.string()).required()
});

export interface ComicPostRequestBody {
  title: string;
  description: string;
  genres: string[];
  categories: string[];
  authors: string[];
}
