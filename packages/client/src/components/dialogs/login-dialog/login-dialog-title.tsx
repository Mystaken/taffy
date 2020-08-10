import React, { FunctionComponent } from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

import { LoginDialogTitleProps } from './types';

export const LoginDialogTitle: FunctionComponent<LoginDialogTitleProps> = ({
  selectedTab,
  onSwitchTabs
}) => {
  return (
    <Paper>
      <Tabs
        value={selectedTab}
        indicatorColor="primary"
        textColor="primary"
        scrollButtons="auto"
        onChange={onSwitchTabs}
        centered>
        <Tab label="Login" />
        <Tab label="Sign up" />
      </Tabs>
    </Paper>
  );
};
