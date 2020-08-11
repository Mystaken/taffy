import { FunctionComponent, useState, useEffect } from 'react';
import {
  ReactStripeElements,
  PaymentRequestButtonElement,
  injectStripe
} from 'react-stripe-elements';

export interface PaymentRequestFormProps {
  country: Country;
  currency: Currency;
  amount: number;
  label: string;
  onGetToken?: (token: string) => void;
}

const PaymentRequestFormView: FunctionComponent<
  ReactStripeElements.InjectedStripeProps & PaymentRequestFormProps
> = ({ amount, stripe, country, currency, label, onGetToken }) => {
  const [canMakePayment, setCanMakePayment] = useState<null | boolean>(null);
  const [
    paymentRequest,
    setPaymentRequest
  ] = useState<stripe.paymentRequest.StripePaymentRequest | null>(null);

  useEffect(() => {
    if (stripe) {
      const paymentRequest = stripe.paymentRequest({
        country,
        currency,
        total: {
          label,
          amount
        }
      });
      paymentRequest.on('token', ({ complete, token }) => {
        complete('success');
        onGetToken?.(token.id);
      });

      paymentRequest.on('paymentmethod', ({ paymentMethod }) => {
        console.log(paymentMethod);
      });

      paymentRequest.canMakePayment().then(result => {
        setCanMakePayment(!!result);
      });
      setPaymentRequest(paymentRequest);
    }
  }, [stripe]);

  return paymentRequest && canMakePayment !== null ? (
    canMakePayment ? (
      <>
        <PaymentRequestButtonElement
          paymentRequest={paymentRequest}
          style={{
            // For more details on how to style the Payment Request Button, see:
            // https://stripe.com/docs/elements/payment-request-button#styling-the-element
            paymentRequestButton: {
              theme: 'light',
              height: '64px'
            }
          }}
        />
      </>
    ) : null
  ) : null;
};

export const PaymentRequestForm = injectStripe(PaymentRequestFormView);
