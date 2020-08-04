import Joi from '@hapi/joi';

export const facebookLoginSchema = Joi.object({
  accessToken: Joi.string().required()
});

export interface FacebookLoginRequestBody {
  accessToken: string;
}
