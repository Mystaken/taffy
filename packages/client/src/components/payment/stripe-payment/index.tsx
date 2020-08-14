import React, { FunctionComponent, useState, useEffect } from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import { Grid } from '@material-ui/core';

import { PaymentForm } from './payment-form';
import { config } from '../../../../config';
import { PaymentDetails } from './payment-details';

export interface StripePaymentProps {
  amount: number;
  interval?: 'day' | 'month' | 'week' | 'year';
  intervalCount?: number;
  onGetToken?: (token: string) => void;
  disabled?: boolean;
}

export const StripePayment: FunctionComponent<StripePaymentProps> = props => {
  const [stripe, setStripe] = useState<stripe.Stripe | null>(null);

  useEffect(() => {
    setStripe(window.Stripe(config.STRIPE_KEY));
  }, []);

  if (!stripe) {
    return null;
  }

  return (
    <Grid container direction="column" justify="center">
      <Grid item>
        <PaymentDetails {...props} />
      </Grid>
      <Grid item xs={12}>
        <StripeProvider stripe={stripe}>
          <div>
            <Elements>
              <PaymentForm {...props}></PaymentForm>
            </Elements>
          </div>
        </StripeProvider>
      </Grid>
    </Grid>
  );
};
