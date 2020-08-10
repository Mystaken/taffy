import { withStyles, Container } from '@material-ui/core';

export const PaddinglessContainer = withStyles(_ => ({
  root: {
    padding: 0
  }
}))(Container);
