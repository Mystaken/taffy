import Stripe from 'stripe';
import { config } from '../../../config';

export const StripeClient = new Stripe(config.STRIPE.SECRET, {
  // @ts-ignore
  apiVersion: null,
  typescript: true
});
