import { storiesOf } from '@storybook/react';
import { AutoSlider } from '.';

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

const slideRenderer = (index: number) => {
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
    <div style={{ ...styles.slide, ...style }} key={index}>
      {`Slide #${index + 1}`}
    </div>
  );
};

stories.add('Auto', () => (
  <AutoSlider autoplay={true}>
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(slideRenderer)}
  </AutoSlider>
));
