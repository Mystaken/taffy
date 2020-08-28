import { FunctionComponent } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { ArrowForwardIos, ArrowBackIos } from '@material-ui/icons';

import {
  SwipeHandlerProps,
  VirtualizedSlider
} from '../../../components/silders/virtualized-slider';
import { VirtualizedSlideRendererParams } from 'react-swipeable-views-utils';
import { ComicCard } from '../../../components/comic/comic-card';
import { CarouselPanel } from '../../../components/panels/carousel-panel';
import { IconWrapper } from '../../../components/icons/icon-wrapper';

const DEFAULT_IMG = 'static/comic/200x300.png';

export interface LatestComicSliderVirtualizedProps {
  comics: Comic[];
  skip?: number;
  onPanelClick?: (comic: Comic, index: number) => void;
}

const swipeStyles = makeStyles(_ => ({
  rightSwipe: {
    zIndex: 1,
    position: 'absolute',
    height: '100%',
    right: 0,
    top: 0,
    width: '100px',
    cursor: 'pointer'
  },
  leftSwipe: {
    zIndex: 1,
    position: 'absolute',
    height: '100%',
    left: 0,
    top: 0,
    width: '100px',
    cursor: 'pointer'
  }
}));

const swipeRight: FunctionComponent<SwipeHandlerProps> = ({ onClick }) => {
  const classes = swipeStyles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="flex-end"
      className={classes.rightSwipe}
      onClick={onClick}>
      <IconWrapper>
        <ArrowForwardIos />
      </IconWrapper>
    </Grid>
  );
};

const swipeLeft: FunctionComponent<SwipeHandlerProps> = ({ onClick }) => {
  const classes = swipeStyles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      className={classes.leftSwipe}
      onClick={onClick}>
      <IconWrapper>
        <ArrowBackIos />
      </IconWrapper>
    </Grid>
  );
};

export const LatestComicSliderVirtualized: FunctionComponent<LatestComicSliderVirtualizedProps> = ({
  comics,
  skip = 4,
  onPanelClick
}) => {
  const desktopRenderer: (
    params: VirtualizedSlideRendererParams
  ) => JSX.Element = ({ index, key }) => {
    const start = index % comics.length;
    const panelSlice = comics.slice(start, start + skip);
    return (
      <CarouselPanel key={key}>
        {panelSlice.map(({ coverImage, title, id }, index) => (
          <ComicCard
            key={id}
            width={200}
            title={title}
            image={coverImage ?? DEFAULT_IMG}
            onClick={() =>
              onPanelClick?.(panelSlice[index], start + index)
            }></ComicCard>
        ))}
      </CarouselPanel>
    );
  };
  return (
    <VirtualizedSlider
      slideRenderer={desktopRenderer}
      swipeRightHandler={swipeRight}
      swipeLeftHandler={swipeLeft}
      swipeable={false}
      skipIndex={Math.min(skip, comics.length)}
    />
  );
};
