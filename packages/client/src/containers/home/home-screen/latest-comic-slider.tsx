import React, { FunctionComponent } from 'react';
import Slider from '../../../components/silders/slider';
import { ComicCard } from '../../../components/comic/comic-card';
import { makeStyles } from '@material-ui/core';

const DEFAULT_IMG = 'static/comic/200x300.png';

export interface LatestComicSliderProps {
  comics: Comic[];
  onPanelClick?: (comic: Comic, index: number) => void;
}

const useStyles = makeStyles(_ => ({
  cardWrapper: {
    display: 'inline-block',
    marginRight: '12px'
  }
}));

export const LatestComicSlider: FunctionComponent<LatestComicSliderProps> = ({
  comics,
  onPanelClick
}) => {
  const classes = useStyles();
  return (
    <Slider horizontal>
      {comics.map((comic, index) => (
        <div className={classes.cardWrapper}>
          <ComicCard
            key={`${comic.id}-${index}`}
            width={200}
            title={comic.title}
            image={comic.coverImage ?? DEFAULT_IMG}
            onClick={() => onPanelClick?.(comic, index)}
          />
        </div>
      ))}
    </Slider>
  );
};
