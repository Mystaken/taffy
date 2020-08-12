import { FunctionComponent } from 'react';
import { Variant } from '@material-ui/core/styles/createTypography';
import { withStyles, Typography, TypographyProps } from '@material-ui/core';

import { COLORS } from '../../../themes/colors';

export interface IconWrapperProps extends Omit<TypographyProps, 'color'> {
  color?: string;
}

export const IconWrapper: FunctionComponent<IconWrapperProps> = ({
  color = COLORS.black,
  ...props
}) => {
  const Wrapper = withStyles(_ => ({ root: { color } }))(Typography);

  return <Wrapper {...props} />;
};
