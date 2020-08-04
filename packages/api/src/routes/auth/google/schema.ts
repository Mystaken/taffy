import Joi from '@hapi/joi';

export const googleLoginSchema = Joi.object({
  idToken: Joi.string().required()
});

export interface GoogleLoginRequestBody {
  idToken: string;
}
