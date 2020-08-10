import React, { FunctionComponent, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import {
  virtualize,
  VirtualizedSlideRendererParams
} from 'react-swipeable-views-utils';
import { makeStyles } from '@material-ui/core';

const VirtualizedSwipeableViews = virtualize(SwipeableViews);

const useStyles = makeStyles(_ => ({
  wrapper: {
    position: 'relative'
  }
}));

export interface SwipeHandlerProps {
  onClick?: () => void;
}

export type SwipeHandler =
  | ((handleProps: SwipeHandlerProps) => JSX.Element)
  | FunctionComponent<SwipeHandlerProps>;

export interface VirtualizedSliderProps {
  /**
   * If set to `true`, panels will be swipable.
   */
  swipeable?: boolean;
  /**
   * Function that renders the sildes.
   */
  slideRenderer: (params: VirtualizedSlideRendererParams) => JSX.Element;
  /**
   * Sets the increment/decrement of the index in `slideRenderer` params.
   */
  skipIndex?: number;
  /**
   * TODO: Add docs
   */
  swipeRightHandler?: SwipeHandler;
  /**
   * TODO: Add Docs
   */
  swipeLeftHandler?: SwipeHandler;
}

export const VirtualizedSlider: FunctionComponent<VirtualizedSliderProps> = ({
  swipeable,
  swipeRightHandler = () => <></>,
  swipeLeftHandler = () => <></>,
  skipIndex = 1,
  ...props
}) => {
  const [index, setIndex] = useState(0);
  const handleSlideLeft = () => {
    setIndex(prev => prev - skipIndex);
  };
  const handleSlideRight = () => {
    setIndex(prev => prev + skipIndex);
  };
  const classes = useStyles();

  const swipeRight = swipeRightHandler({ onClick: handleSlideRight });
  const swipeLeft = swipeLeftHandler({ onClick: handleSlideLeft });

  return (
    <div className={classes.wrapper}>
      {swipeLeft}
      <VirtualizedSwipeableViews
        index={index}
        onChangeIndex={setIndex}
        enableMouseEvents
        {...props}></VirtualizedSwipeableViews>
      {swipeRight}
    </div>
  );
};
