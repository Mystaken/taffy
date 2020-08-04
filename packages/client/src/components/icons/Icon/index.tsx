/**
 * Icons that defaults to the theme color.
 */
import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { styled } from '@material-ui/core';

export type IconProps = FontAwesomeIconProps;

export const Icon = styled(FontAwesomeIcon)(({ theme }) => ({
  color: theme.palette.primary.main
}));
