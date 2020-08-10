import React, { FunctionComponent, MouseEvent } from 'react';
import { CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export interface AutoSliderItemProps {
  /** The image url to display. */
  image: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

const useStyles = makeStyles(_ => ({
  card: {
    width: '100%',
    position: 'relative',
    paddingTop: '56.25%',
    cursor: 'pointer'
  }
}));

export const AutoSliderItem: FunctionComponent<AutoSliderItemProps> = props => {
  const classes = useStyles();
  return <CardMedia className={classes.card} {...props} />;
};
