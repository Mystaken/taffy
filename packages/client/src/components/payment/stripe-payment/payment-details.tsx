import { FunctionComponent } from 'react';
import { Typography, Grid } from '@material-ui/core';

export interface PaymentDetailsProps {
  amount: number;
  interval?: 'day' | 'month' | 'week' | 'year';
  intervalCount?: number;
}
export const PaymentDetails: FunctionComponent<PaymentDetailsProps> = ({
  amount,
  interval,
  intervalCount
}) => {
  const formattedInterval =
    interval && intervalCount
      ? `${intervalCount === 1 ? ' / ' : ` / ${intervalCount} `}${interval}`
      : '';
  return (
    <Grid container justify="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h6">Total</Typography>
      </Grid>
      <Grid item>
        <Typography align="center" variant="body1">
          ${amount}
          {formattedInterval}
        </Typography>
      </Grid>
    </Grid>
  );
};
