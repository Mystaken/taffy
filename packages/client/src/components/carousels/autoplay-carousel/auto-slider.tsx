import React, { FunctionComponent, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay, WithAutoPlayProps } from 'react-swipeable-views-utils';
import { MobileStepper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { arrayify } from '../../../utils/common';

// TODO (Low Priority): May need to redo the pagination buttons
const AutoplaySwipeableViews = autoPlay(SwipeableViews);

export interface AutoSliderProps extends Partial<WithAutoPlayProps> {
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
        {...props}
      />
      {pagination && (
        <MobileStepper
          className={classes.pagination}
          variant="dots"
          steps={children.length}
          backButton={<></>}
          nextButton={<></>}
          position="static"
          activeStep={index}
        />
      )}
    </div>
  );
};
