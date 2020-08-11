import React, { FunctionComponent } from 'react';
import { PaymentSuccessPage } from '../../../components/pages/payment-success-page';
import { useIsDesktop } from '../../../hooks/media-query.hook';

export const MembershipPaymentSuccessPage: FunctionComponent = () => {
  const isDesktop = useIsDesktop();
  return <PaymentSuccessPage variant={isDesktop ? 'h3' : 'h5'} />;
};

export default MembershipPaymentSuccessPage;
