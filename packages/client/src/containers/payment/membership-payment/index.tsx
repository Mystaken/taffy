import { FunctionComponent } from 'react';
import { StripePayment } from '../../../components/payment/stripe-payment';
import { useAsync } from '../../../hooks/async.hook';
import { getTaffyMembership } from '../../../services/memberships/get-taffy-membership';
import { subscriptionPayment } from '../../../services/memberships/subscription-payment';

export interface MembershipPaymentProps {
  onSuccess?: (subscription: Subscription) => void;
}
export const MembershipPayment: FunctionComponent<MembershipPaymentProps> = ({
  onSuccess
}) => {
  const [membership] = useAsync(() => getTaffyMembership(), []);
  if (!membership) {
    return null;
  }

  const handleOnGetToken = async (token: string) => {
    const subscription = await subscriptionPayment(token);
    onSuccess?.(subscription);
  };

  return (
    <StripePayment
      amount={(membership as any).unitAmount / 100}
      interval={membership.recurring?.interval}
      intervalCount={membership.recurring?.intervalCount}
      onGetToken={handleOnGetToken}
    />
  );
};
