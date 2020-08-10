import React, { FunctionComponent } from 'react';
import { getAllComics } from '../../../services/comic/get-all-comics';
import { useAsync } from '../../../hooks/async.hook';
import { Container, Typography, makeStyles } from '@material-ui/core';
import { AutoplayPanel } from './autoplay-panels';
import { LatestComicSlider } from './latest-comic-slider';

const useStyles = makeStyles(_ => ({
  wrapper: {
    backgroundColor: 'grey',
    height: '100%'
  }
}));
export const HomeScreen: FunctionComponent = () => {
  const [comics] = useAsync(() => getAllComics(), []);
  const classes = useStyles();

  if (!comics) {
    return null;
  }

  return (
    <div className={classes.wrapper}>
      <Container maxWidth="md">
        <AutoplayPanel comics={comics} />
      </Container>
      <Container maxWidth="lg">
        <Typography variant="h5" color="primary">
          Latest
        </Typography>
        <LatestComicSlider comics={comics} />
      </Container>
    </div>
  );
};
