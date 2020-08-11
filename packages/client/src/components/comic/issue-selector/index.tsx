import React, { FunctionComponent } from 'react';
import { Grid, Paper, Typography, makeStyles, Button } from '@material-ui/core';
import { IssueSelectorProps } from './types';

const issueSelectorStyles = makeStyles(_ => ({
  title: {
    marginLeft: '10px'
  },
  issue: {
    padding: '6px 12px 6px 12px'
  }
}));

export const IssueSelector: FunctionComponent<IssueSelectorProps> = ({
  issues,
  onIssueSelect,
  isVip = false,
  onGetVIP
}) => {
  const classes = issueSelectorStyles();
  return (
    <Grid container direction="column">
      <Grid item>
        {issues.map((issue, i) => (
          <Paper square className={classes.issue} key={i}>
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <Grid container alignItems="center">
                  <img src={issue.coverImage} width={100} height={50} />
                  <Typography
                    className={
                      classes.title
                    }>{`Chapter ${i}: ${issue.title}`}</Typography>
                </Grid>
              </Grid>

              {isVip || issue.membership === 'Free' ? (
                <Button
                  onClick={() =>
                    onIssueSelect ? onIssueSelect(issue, i) : <></>
                  }>
                  Read
                </Button>
              ) : (
                <Button color="secondary" onClick={onGetVIP}>
                  Get VIP
                </Button>
              )}
            </Grid>
          </Paper>
        ))}
      </Grid>
    </Grid>
  );
};
