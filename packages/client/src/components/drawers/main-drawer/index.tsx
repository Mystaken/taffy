import React, { FunctionComponent } from 'react';
import {
  Drawer,
  makeStyles,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Typography,
  Button,
  Grid,
  Divider,
  ListItemText,
  ListItemIcon
} from '@material-ui/core';
import { DrawerProps } from '@material-ui/core/Drawer';
import { Star } from '@material-ui/icons';
import { IconWrapper } from '../../icons/icon-wrapper';
import { COLORS } from '../../../themes/colors';

const useStyles = makeStyles(theme => ({
  content: {
    width: 300
  },
  header: {
    backgroundColor: theme.palette.primary.main,
    height: 48
  }
}));

export interface MainDrawerProps extends Pick<DrawerProps, 'open' | 'onClose'> {
  user?: User;
  onLogout?: () => void;
  onSignin?: () => void;
  onSignup?: () => void;
  onVipPurchaseClicked?: () => void;
}

export const MainDrawer: FunctionComponent<MainDrawerProps> = ({
  user,
  onLogout,
  onSignin,
  onSignup,
  onVipPurchaseClicked,
  onClose,
  ...drawerProps
}) => {
  const classes = useStyles();
  return (
    <Drawer
      {...drawerProps}
      onClose={onClose}
      BackdropProps={{ invisible: true }}>
      <div className={classes.content}>
        <List className={classes.header}>
          <ListItem
            button
            alignItems="center"
            onClick={(_: any) => onClose?.({}, 'backdropClick')}>
            <ListItemAvatar>
              <Avatar
                alt="Taffy"
                src="static/icons/illustrious_comics_logo.png"
              />
            </ListItemAvatar>
            <Typography variant="h5" color="textSecondary">
              Taffy
            </Typography>
          </ListItem>
        </List>

        <List>
          <ListItem>
            {user ? (
              <Grid container direction="column">
                <Typography variant="h5" align="center">
                  Hi {user.firstName}!
                </Typography>
                <Button variant="contained" color="primary" onClick={onLogout}>
                  Logout
                </Button>
              </Grid>
            ) : (
              <Grid container spacing={2} justify="space-evenly">
                <Button variant="contained" color="primary" onClick={onSignin}>
                  SIGN IN
                </Button>
                <Button variant="contained" color="primary" onClick={onSignup}>
                  SIGN UP
                </Button>
              </Grid>
            )}
          </ListItem>
        </List>
        <Divider />

        <List>
          <ListItem button onClick={onVipPurchaseClicked}>
            <ListItemIcon>
              <IconWrapper
                color={
                  user?.isVip ? COLORS['bright-yellow'] : COLORS['light-grey']
                }>
                <Star />
              </IconWrapper>
            </ListItemIcon>
            <ListItemText primary="VIP Membership" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};
