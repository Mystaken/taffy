import Joi from '@hapi/joi';

export const comicIssuePostSchema = Joi.object({
  title: Joi.string().required(),
  membership: Joi.string().required()
});

export interface ComicIssuePostRequestBody {
  title: string;
  membership: string;
}
