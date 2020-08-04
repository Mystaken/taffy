import Joi from '@hapi/joi';

export const signUpSchema = Joi.object({
  firstName: Joi.string()
    .regex(/^[a-zA-Z]+$/)
    .min(1)
    .required(),
  lastName: Joi.string()
    .regex(/^[a-zA-Z]+$/)
    .min(1)
    .required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net', 'ca'] }
  }),
  password: Joi.string().min(8).required()
});

export interface SignInRequestBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
