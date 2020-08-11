import React, { FunctionComponent } from 'react';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Variant } from '@material-ui/core/styles/createTypography';

export interface PaymentSuccessPageProps {
  onBackClick?: () => void;
  disabled?: boolean;
  variant?: Variant;
}
const useStyles = makeStyles(_ => ({
  container: {
    height: '100vh',
    width: '100vw'
  }
}));

export const PaymentSuccessPage: FunctionComponent<PaymentSuccessPageProps> = ({
  onBackClick,
  disabled = false,
  variant
}) => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.container}
      direction="column"
      justify="center"
      alignContent="center">
      <Grid item>
        <Grid container justify="center">
          <FontAwesomeIcon size="5x" color="lightgreen" icon="check-circle" />
        </Grid>
      </Grid>
      <Typography variant={variant}>Payment Successful!</Typography>
      <Button onClick={() => onBackClick?.()} disabled={disabled}>
        Back
      </Button>
    </Grid>
  );
};
