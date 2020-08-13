import React, { FunctionComponent } from 'react';
import { Container, Typography } from '@material-ui/core';

import { getAllComics } from '../../../services/comics/get-all-comics';
import { useAsync } from '../../../hooks/async.hook';
import { AutoplayPanel } from './autoplay-panels';
import { LatestComicSlider } from './latest-comic-slider';
import { PaddinglessContainer } from '../../../components/layouts/paddingless-container';

export interface HomeScreenProps {
  onComicSelect?: (comic: Comic) => void;
}

export const HomeScreen: FunctionComponent<HomeScreenProps> = ({
  onComicSelect
}) => {
  const { value: comics } = useAsync(() => getAllComics(), []);

  if (!comics) {
    return null;
  }

  return (
    <>
      <PaddinglessContainer maxWidth="md">
        <AutoplayPanel comics={comics} onPanelClick={onComicSelect} />
      </PaddinglessContainer>
      {comics.length > 0 && (
        <Container maxWidth="lg">
          <Typography variant="h5" color="primary">
            Latest
          </Typography>
          <LatestComicSlider comics={comics} onPanelClick={onComicSelect} />
        </Container>
      )}
    </>
  );
};
