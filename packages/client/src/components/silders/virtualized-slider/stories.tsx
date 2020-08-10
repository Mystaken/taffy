import { storiesOf } from '@storybook/react';
import { VirtualizedSlider } from '.';
import { VirtualizedSlideRendererParams } from 'react-swipeable-views-utils';
import { FunctionComponent } from 'react';

const stories = storiesOf('Sliders', module);

stories.addParameters({ info: { inline: true } });

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff'
  },
  slide1: {
    backgroundColor: '#FEA900'
  },
  slide2: {
    backgroundColor: '#B3DC4A'
  },
  slide3: {
    backgroundColor: '#6AC0FF'
  }
};

const slideRenderer = (params: VirtualizedSlideRendererParams) => {
  const { index, key } = params;
  let style;

  switch (Math.abs(index) % 3) {
    case 0:
      style = styles.slide1;
      break;

    case 1:
      style = styles.slide2;
      break;

    case 2:
      style = styles.slide3;
      break;

    default:
      break;
  }

  return (
    <div style={{ ...styles.slide, ...style }} key={key}>
      {`Slide #${index + 1}`}
    </div>
  );
};
const swipeRight: FunctionComponent<{ onClick?: () => void }> = ({
  onClick
}) => <button onClick={onClick}>Swipe Right</button>;

const swipeLeft: FunctionComponent<{ onClick?: () => void }> = ({
  onClick
}) => <button onClick={onClick}>Swipe Left</button>;

stories.add('Virtualized', () => (
  <VirtualizedSlider
    slideRenderer={slideRenderer}
    swipeRightHandler={swipeRight}
    swipeLeftHandler={swipeLeft}></VirtualizedSlider>
));
