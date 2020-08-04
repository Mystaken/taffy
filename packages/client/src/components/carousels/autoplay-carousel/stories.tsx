import { storiesOf } from '@storybook/react';
import { Container } from '@material-ui/core';
import { AutoplayCarouselItem, AutoplayCarousel } from '.';

const stories = storiesOf('Carousel', module);
stories.addParameters({ info: { inline: true } });

stories.add('Autoplay Carousel', () => (
  <Container maxWidth="md">
    <AutoplayCarousel>
      <AutoplayCarouselItem image="https://via.placeholder.com/300x200"></AutoplayCarouselItem>
      <AutoplayCarouselItem image="https://via.placeholder.com/300x200"></AutoplayCarouselItem>
      <AutoplayCarouselItem image="https://via.placeholder.com/300x200"></AutoplayCarouselItem>
    </AutoplayCarousel>
  </Container>
));
