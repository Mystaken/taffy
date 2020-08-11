import React, { FunctionComponent } from 'react';
import { Grid, Fab } from '@material-ui/core';
import { Icon, IconProps } from '../../icons/Icon';
import { useSmallerThan } from '../../../hooks/media-query.hook';

interface FooterIconProps extends IconProps {
  name: string;
  href: string;
  buttonSize?: 'small' | 'medium' | 'large';
}

const FooterIcon: FunctionComponent<FooterIconProps> = ({
  name,
  href,
  buttonSize,
  ...iconProps
}) => {
  return (
    <Grid item>
      <Fab href={href} size={buttonSize} aria-label={name}>
        <Icon {...iconProps} />
      </Fab>
    </Grid>
  );
};

export const FooterIcons: FunctionComponent = () => {
  const tooSmall = useSmallerThan(360);
  return (
    <Grid container direction="row" justify="center" spacing={tooSmall ? 1 : 2}>
      <FooterIcon
        name="Facebook"
        href="#"
        buttonSize={tooSmall ? 'small' : 'medium'}
        icon={['fab', 'facebook-square']}></FooterIcon>
      <FooterIcon
        name="Twitter"
        href="#"
        buttonSize={tooSmall ? 'small' : 'medium'}
        icon={['fab', 'twitter']}></FooterIcon>
      <FooterIcon
        name="Youtube"
        href="#"
        buttonSize={tooSmall ? 'small' : 'medium'}
        icon={['fab', 'youtube']}></FooterIcon>
      <FooterIcon
        name="Instagram"
        href="#"
        buttonSize={tooSmall ? 'small' : 'medium'}
        icon={['fab', 'flickr']}></FooterIcon>
      <FooterIcon
        name="Instagram"
        href="#"
        buttonSize={tooSmall ? 'small' : 'medium'}
        icon={['fab', 'instagram']}></FooterIcon>
    </Grid>
  );
};
