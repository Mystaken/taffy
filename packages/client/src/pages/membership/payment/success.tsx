import React, { FunctionComponent } from 'react';
import { PaymentSuccessPage } from '../../../components/pages/payment-success-page';
import { useIsDesktop } from '../../../hooks/media-query.hook';
import { redirect } from '../../../utils/redirect';
import { pages } from '../../../routing';

export const MembershipPaymentSuccessPage: FunctionComponent = () => {
  const isDesktop = useIsDesktop();

  const handleOnBackClick = async () => {
    await redirect(pages.homepage);
  };

  return (
    <PaymentSuccessPage
      typographyProps={{ variant: isDesktop ? 'h3' : 'h5' }}
      iconProps={{ variant: isDesktop ? 'h2' : 'h4' }}
      onBackClick={handleOnBackClick}
    />
  );
};

export default MembershipPaymentSuccessPage;
