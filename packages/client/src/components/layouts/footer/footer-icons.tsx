import React, { FunctionComponent } from 'react';
import { Grid, Fab } from '@material-ui/core';
import { useSmallerThan } from '../../../hooks/media-query.hook';
import { Facebook, Twitter, YouTube, Instagram } from '@material-ui/icons';

interface FooterIconProps {
  name: string;
  href: string;
  buttonSize?: 'small' | 'medium' | 'large';
}

const FooterIcon: FunctionComponent<FooterIconProps> = ({
  name,
  href,
  buttonSize,
  children
}) => {
  return (
    <Grid item>
      <Fab href={href} size={buttonSize} aria-label={name}>
        {children as any}
      </Fab>
    </Grid>
  );
};

export const FooterIcons: FunctionComponent = () => {
  const tooSmall = useSmallerThan(300);
  return (
    <Grid container direction="row" justify="center" spacing={tooSmall ? 1 : 2}>
      <FooterIcon
        name="Facebook"
        href="#"
        buttonSize={tooSmall ? 'small' : 'medium'}>
        <Facebook />
      </FooterIcon>
      <FooterIcon
        name="Twitter"
        href="#"
        buttonSize={tooSmall ? 'small' : 'medium'}>
        <Twitter />
      </FooterIcon>
      <FooterIcon
        name="Youtube"
        href="#"
        buttonSize={tooSmall ? 'small' : 'medium'}>
        <YouTube />
      </FooterIcon>
      <FooterIcon
        name="Instagram"
        href="#"
        buttonSize={tooSmall ? 'small' : 'medium'}>
        <Instagram />
      </FooterIcon>
    </Grid>
  );
};
