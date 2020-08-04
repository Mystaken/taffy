import { storiesOf } from '@storybook/react';
import { VirtualizedFixedLoader } from '.';

const stories = storiesOf('Loader', module);

const Row = ({ index, style }: any) => {
  return (
    <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
      Row {index}
    </div>
  );
};

stories.add('Virtualized Fixed Loader', () => {
  return (
    <div style={{ height: '500px' }}>
      <VirtualizedFixedLoader itemSize={35} itemCount={1000}>
        {Row}
      </VirtualizedFixedLoader>
    </div>
  );
});
