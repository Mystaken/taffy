import React, { FunctionComponent } from 'react';
import { ErrorPage } from '../components/pages/error-page';

const NotFoundPage: FunctionComponent = () => {
  return <ErrorPage message="404 - Page not found" />;
};

export default NotFoundPage;
