import Joi from '@hapi/joi';

export const loginSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'ca'] }
    })
    .required(),
  password: Joi.string().min(8).required()
});

export interface LoginRequestBody {
  email: string;
  password: string;
}
