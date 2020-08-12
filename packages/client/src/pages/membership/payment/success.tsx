import React, { FunctionComponent } from 'react';
import { PaymentSuccessPage } from '../../../components/pages/payment-success-page';
import { useIsDesktop } from '../../../hooks/media-query.hook';

export const MembershipPaymentSuccessPage: FunctionComponent = () => {
  const isDesktop = useIsDesktop();
  return (
    <PaymentSuccessPage
      typographyProps={{ variant: isDesktop ? 'h3' : 'h5' }}
      iconProps={{ variant: isDesktop ? 'h2' : 'h4' }}
    />
  );
};

export default MembershipPaymentSuccessPage;
