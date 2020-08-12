import { FunctionComponent } from 'react';
import { CenteredContainer } from '../../layouts/centered-container';
import { Typography } from '@material-ui/core';

export interface ErrorPageProps {
  message: string;
}
export const ErrorPage: FunctionComponent<ErrorPageProps> = ({ message }) => {
  return (
    <CenteredContainer>
      <Typography variant="h4">{message}</Typography>
    </CenteredContainer>
  );
};
