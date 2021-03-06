import React, { FunctionComponent } from 'react';
import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';

import { IssueViewerProps } from './types';

const issueViewerStyles = makeStyles(_ => ({
  title: {
    marginLeft: '10px'
  },
  issue: {
    padding: '6px 12px 6px 12px',
    cursor: 'pointer'
  }
}));

export const IssueViewer: FunctionComponent<IssueViewerProps> = ({
  issues
}) => {
  const classes = issueViewerStyles();
  return (
    <Grid container direction="column">
      {issues.map((issue, i) => (
        <Grid item>
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
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};
