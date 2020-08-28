import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core';
import ScrollContainer, {
  IScrollContainerProps
} from 'react-indiana-drag-scroll';

const sliderStyles = makeStyles(_ => ({
  slider: {
    whiteSpace: 'nowrap',
    overflowY: 'hidden'
  }
}));

export type SliderProps = Omit<IScrollContainerProps, 'ref'>;

const Slider: FunctionComponent<SliderProps> = ({ children, ...props }) => {
  const classes = sliderStyles();
  return (
    <ScrollContainer className={classes.slider} {...props}>
      {children}
    </ScrollContainer>
  );
};

export default Slider;
