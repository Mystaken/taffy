import { FunctionComponent, useState } from 'react';
import { StripePayment } from '../../../components/payment/stripe-payment';
import { useAsync } from '../../../hooks/async.hook';
import { getTaffyMembership } from '../../../services/memberships/get-taffy-membership';
import {
  subscriptionPayment,
  SubscriptionPayment
} from '../../../services/memberships/subscription-payment';

export interface MembershipPaymentProps {
  onSuccess?: (subscription: SubscriptionPayment) => void;
  disabled?: boolean;
}
export const MembershipPayment: FunctionComponent<MembershipPaymentProps> = ({
  onSuccess,
  disabled = false
}) => {
  const { value: membership } = useAsync(() => getTaffyMembership(), []);
  const [loading, setLoading] = useState(false);
  if (!membership) {
    return null;
  }

  const handleOnGetToken = async (token: string) => {
    setLoading(true);
    const subscription = await subscriptionPayment(token);
    onSuccess?.(subscription);
    setLoading(false);
  };

  return (
    <StripePayment
      amount={(membership as any).unitAmount / 100}
      interval={membership.recurring?.interval}
      intervalCount={membership.recurring?.intervalCount}
      onGetToken={handleOnGetToken}
      disabled={loading || disabled}
    />
  );
};
