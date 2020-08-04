import React, { FunctionComponent } from 'react';
import {
  Grid,
  Typography,
  ListItem,
  Avatar,
  ListItemAvatar
} from '@material-ui/core';

export interface NavbarContentProps {
  homeButtonClick?: () => void;
}

export const NavbarContent: FunctionComponent<NavbarContentProps> = ({
  homeButtonClick
}) => {
  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Grid item>
        <ListItem button alignItems="center" onClick={homeButtonClick}>
          <ListItemAvatar>
            <Avatar
              alt="Taffy"
              src="/static/icons/illustrious_comics_logo.png"
            />
          </ListItemAvatar>
          <Typography variant="h5" color="textSecondary">
            Taffy
          </Typography>
        </ListItem>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
};
