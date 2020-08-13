import { StripeClient } from '../client';
import { config } from '../../../../config';

const TEST_SECRET = 'whsec_test_secret';

export const constructEvent = (
  payload: string,
  header: string | Buffer | string[]
) => {
  if (config.STRIPE.WEBHOOK_SECRET === TEST_SECRET) {
    const testHeaders = StripeClient.webhooks.generateTestHeaderString({
      payload,
      secret: config.STRIPE.WEBHOOK_SECRET
    });
    return StripeClient.webhooks.constructEvent(
      payload,
      testHeaders,
      config.STRIPE.WEBHOOK_SECRET
    );
  }

  return StripeClient.webhooks.constructEvent(
    payload,
    header,
    config.STRIPE.WEBHOOK_SECRET
  );
};
