import { FunctionComponent } from 'react';
import { Grid, withStyles } from '@material-ui/core';

const ContainerGrid = withStyles(_ => ({
  root: { minHeight: '100vh' }
}))(Grid);

export const FooterContainer: FunctionComponent = props => {
  return (
    <ContainerGrid
      container
      direction="column"
      justify="space-between"
      {...props}
    />
  );
};
