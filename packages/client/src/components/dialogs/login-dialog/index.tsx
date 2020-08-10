import React, { FunctionComponent, useState, useEffect } from 'react';
import { Dialog } from '@material-ui/core';

import { LoginDialogContent } from './login-dialog-content';
import { SignupDialogContent } from './signup-dialog-content';
import { LoginDialogProps } from './types';
import { LoginDialogTitle } from './login-dialog-title';

export const LoginDialog: FunctionComponent<LoginDialogProps> = ({
  tab = 'login',
  disabled = false,
  onLogin,
  onFacebookLogin,
  onGoogleLogin,
  onSignup,
  ...dialogProps
}) => {
  const [selectedTab, setSelectedTab] = useState(tab === 'login' ? 0 : 1);

  const handleSwitchTabs = (_: React.ChangeEvent<{}>, tab: number) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    setSelectedTab(_ => (tab === 'login' ? 0 : 1));
  }, [tab]);

  return (
    <Dialog {...dialogProps}>
      <LoginDialogTitle
        selectedTab={selectedTab}
        onSwitchTabs={handleSwitchTabs}
      />
      {selectedTab === 0 ? (
        <LoginDialogContent
          disabled={disabled}
          onLogin={onLogin}
          onFacebookLogin={onFacebookLogin}
          onGoogleLogin={onGoogleLogin}
        />
      ) : selectedTab === 1 ? (
        <SignupDialogContent disabled={disabled} onSignup={onSignup} />
      ) : null}
    </Dialog>
  );
};
