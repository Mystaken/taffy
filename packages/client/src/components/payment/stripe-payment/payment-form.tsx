import { FunctionComponent, useState } from 'react';
import {
  CardElement,
  ReactStripeElements,
  injectStripe
} from 'react-stripe-elements';
import { Grid, Button } from '@material-ui/core';

import { ColorTypography } from '../../primitives/typography/colored-typography';

interface PaymentFormProps {
  amount: number;
  onGetToken?: (token: string) => void;
}
const PaymentFormView: FunctionComponent<
  ReactStripeElements.InjectedStripeProps & PaymentFormProps
> = ({ stripe, onGetToken }) => {
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (stripe) {
      setDisabled(true);
      const { token, error } = await stripe.createToken();
      if (error) {
        setError(error.message);
      } else if (token) {
        onGetToken?.(token.id);
      }
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
    setDisabled(false);
  };
  return (
    <>
      <style jsx global>{`
        input,
        .StripeElement {
          display: block;
          margin: 10px 0 10px 0;
          padding: 10px 14px;
          font-size: 1em;
          font-family: 'Source Code Pro', monospace;
          box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
            rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
          border: 0;
          outline: 0;
          border-radius: 4px;
          background: white;
        }
      `}</style>
      <CardElement />
      <Grid container justify="center">
        <Button
          onClick={handleSubmit}
          color="primary"
          variant="contained"
          disabled={disabled}>
          Pay
        </Button>
      </Grid>
      <ColorTypography color="red">{error}</ColorTypography>
    </>
  );
};

export const PaymentForm = injectStripe(PaymentFormView);
