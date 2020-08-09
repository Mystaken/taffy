import Joi from '@hapi/joi';

export const comicIdPostSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  genres: Joi.array().items(Joi.string()),
  categories: Joi.array().items(Joi.string()),
  authors: Joi.array().items(Joi.string()),
  coverImage: Joi.object()
});

export interface ComicIdPostRequestBody {
  title: string;
  description: string;
  genres?: string[];
  categories?: string[];
  authors?: string[];
}
