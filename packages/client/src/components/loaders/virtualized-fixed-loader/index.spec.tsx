import React from 'react';
import { create } from 'react-test-renderer';
import { VirtualizedFixedLoader } from '.';
import { mount } from 'enzyme';

const Row = ({ index, style }: any) => {
  return (
    <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
      Row {index}
    </div>
  );
};

describe('<VirtualizedFixedLoader />', () => {
  it('has rendered correctly', () => {
    const component = create(
      <div style={{ height: '500px' }}>
        <VirtualizedFixedLoader itemSize={35} itemCount={1000}>
          {Row}
        </VirtualizedFixedLoader>
      </div>
    );
    const tree = component.toJSON()!;
    expect(tree).toMatchSnapshot();
  });

  it('should moount', () => {
    mount(
      <div style={{ height: '500px' }}>
        <VirtualizedFixedLoader itemSize={35} itemCount={1000}>
          {Row}
        </VirtualizedFixedLoader>
      </div>
    );
  });
});
