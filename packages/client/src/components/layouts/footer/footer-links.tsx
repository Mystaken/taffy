import React, { FunctionComponent } from 'react';
import { useWiderThan } from '../../../hooks/media-query.hook';
import { Grid, Link } from '@material-ui/core';
import { FooterText } from './footer-text';

interface FooterLinkProps {
  name: string;
  href: string;
}

const FooterLink: FunctionComponent<FooterLinkProps> = ({ name, href }) => {
  return (
    <Grid item>
      <Link href={href}>
        <FooterText variant="subtitle2" align="center">
          {name}
        </FooterText>
      </Link>
    </Grid>
  );
};

export const FooterLinks: FunctionComponent = () => {
  const displayRow = useWiderThan(500);
  return (
    <Grid
      container
      direction={displayRow ? 'row' : 'column'}
      justify="center"
      alignItems="center"
      spacing={displayRow ? 2 : 1}>
      <FooterLink name="HOME" href="#"></FooterLink>
      <FooterLink name="OUR MEDIA" href="#"></FooterLink>
      <FooterLink name="ABOUT US" href="#"></FooterLink>
      <FooterLink name="FAQ" href="#"></FooterLink>
      <FooterLink name="TERMS AND SERVICES" href="#"></FooterLink>
    </Grid>
  );
};
