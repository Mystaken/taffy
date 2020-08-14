import React, { FunctionComponent } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { CheckCircleOutline } from '@material-ui/icons';
import { Variant } from '@material-ui/core/styles/createTypography';
import { CenteredContainer } from '../../layouts/centered-container';
import { COLORS } from '../../../themes/colors';
import { IconWrapper } from '../../icons/icon-wrapper';

export interface PaymentSuccessPageProps {
  onBackClick?: () => void;
  disabled?: boolean;

  typographyProps?: {
    variant?: Variant;
  };
  iconProps?: {
    variant?: Variant;
  };
}

export const PaymentSuccessPage: FunctionComponent<PaymentSuccessPageProps> = ({
  onBackClick,
  disabled = false,
  typographyProps = {},
  iconProps = {}
}) => {
  return (
    <CenteredContainer>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <IconWrapper variant={iconProps.variant} color={COLORS.green}>
            <CheckCircleOutline fontSize="inherit" />
          </IconWrapper>
        </Grid>
        <Grid item>
          <Typography variant={typographyProps.variant}>
            Payment Successful!
          </Typography>
        </Grid>
        <Button onClick={onBackClick} disabled={disabled}>
          Back
        </Button>
      </Grid>
    </CenteredContainer>
  );
};
