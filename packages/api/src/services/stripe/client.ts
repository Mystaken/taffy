import Stripe from 'stripe';
import { config } from '../../../config';
console.log(config.STRIPE);
export const StripeClient = new Stripe(config.STRIPE.SECRET, {
  // @ts-ignore
  apiVersion: null,
  typescript: true
});
