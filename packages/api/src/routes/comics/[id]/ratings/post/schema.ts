import Joi from '@hapi/joi';

export const comicsRatingsPostSchema = Joi.object({
  rating: Joi.number().required().min(0)
});

export interface ComicRatingsPostRequestBody {
  rating: number;
}
