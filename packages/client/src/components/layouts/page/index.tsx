import React, { FunctionComponent } from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';

export const Page: FunctionComponent<NextSeoProps> = ({
  title = 'Illustrious Comics',
  children,
  ...props
}) => {
  return (
    <>
      <NextSeo title={title} {...props}></NextSeo>
      {children}
    </>
  );
};
