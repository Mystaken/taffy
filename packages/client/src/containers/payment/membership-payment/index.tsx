import { FunctionComponent } from 'react';
import { StripePayment } from '../../../components/payment/stripe-payment';
import { useAsync } from '../../../hooks/async.hook';
import { getTaffyMembership } from '../../../services/membership/get-taffy-membership';

export interface MembershipPaymentProps {
  onSuccess?: () => void;
}
export const MembershipPayment: FunctionComponent<MembershipPaymentProps> = () => {
  const [membership] = useAsync(() => getTaffyMembership(), []);
  console.log(membership);
  if (!membership) {
    return null;
  }
  return (
    <StripePayment
      amount={(membership as any).unitAmount / 100}
      interval={membership.recurring?.interval}
      intervalCount={membership.recurring?.intervalCount}
    />
  );
};
