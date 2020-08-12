export class StripeError extends Error {
  public errors: string = 'Failed to create Stripe Subscription';
}
