import React, { FunctionComponent, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay, AutoPlayProps } from 'react-swipeable-views-utils';
import { MobileStepper } from '@material-ui/core';
import { arrayify } from '../../../utils/common';
import { makeStyles } from '@material-ui/styles';

const AutoplaySwipeableViews = autoPlay(SwipeableViews);

export interface AutoSliderProps extends AutoPlayProps {
  /**
   * If set to `true`, pagination dots will be added.
   */
  pagination?: boolean;
  /**
   * If set to `true`, panels will be swipable.
   */
  swipeable?: boolean;
}

const autoSliderStyles = makeStyles(_ => ({
  wrapper: {
    position: 'relative'
  },
  pagination: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'inherit'
  }
}));

export const AutoSlider: FunctionComponent<AutoSliderProps> = ({
  pagination = true,
  swipeable = true,
  ...props
}) => {
  const [index, setIndex] = useState(0);
  const classes = autoSliderStyles();
  const children = arrayify(props.children);
  return (
    <div className={classes.wrapper}>
      <AutoplaySwipeableViews
        index={index}
        onChangeIndex={setIndex}
        enableMouseEvents
        {...props}></AutoplaySwipeableViews>
      {pagination && (
        <MobileStepper
          className={classes.pagination}
          variant="dots"
          steps={children.length}
          backButton={<></>}
          nextButton={<></>}
          position="static"
          activeStep={index}></MobileStepper>
      )}
    </div>
  );
};
