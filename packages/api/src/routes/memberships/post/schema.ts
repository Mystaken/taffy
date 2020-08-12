import Joi from '@hapi/joi';

export const membershipPostSchema = Joi.object({
  stripeToken: Joi.string().required()
});

export interface MembershipPostRequestBoy {
  stripeToken: string;
}
