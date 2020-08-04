import React, { FunctionComponent, MouseEvent } from 'react';
import { CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { AutoSlider, AutoSliderProps } from './auto-slider';

interface AutoplayCarouselItemProps {
  /**
   * The image url to display.
   */
  image: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

const autoplayPanelStyles = makeStyles(_ => ({
  card: {
    width: '100%',
    position: 'relative',
    paddingTop: '56.25%'
  }
}));

export const AutoplayCarouselItem: FunctionComponent<AutoplayCarouselItemProps> = props => {
  const classes = autoplayPanelStyles();
  return <CardMedia className={classes.card} {...props} />;
};

export interface AutoplayCarousel extends AutoSliderProps {}

export const AutoplayCarousel: FunctionComponent<AutoplayCarousel> = ({
  ...autoProps
}) => {
  return <AutoSlider {...autoProps} />;
};
