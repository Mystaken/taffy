import React, { FunctionComponent, ComponentType } from 'react';
import {
  FixedSizeList,
  ListChildComponentProps,
  ListOnItemsRenderedProps,
  ListOnScrollProps
} from 'react-window';
import AutoSizer, { AutoSizerProps } from 'react-virtualized-auto-sizer';

export interface VirtualizedFixedLoaderProps {
  height?: string;
  width?: string;
  children: ComponentType<ListChildComponentProps>;
  itemSize: number;
  itemCount: number;
  initialScrollOffset?: number;
  overscanCount?: number;
  onItemsRendered?: (props: ListOnItemsRenderedProps) => void;
  onScroll?: (props: ListOnScrollProps) => void;
}

export const VirtualizedFixedLoader: FunctionComponent<
  VirtualizedFixedLoaderProps & Omit<AutoSizerProps, 'children'>
> = ({
  height,
  width,
  children,
  itemSize,
  itemCount,
  initialScrollOffset,
  overscanCount,
  onItemsRendered,
  onScroll,
  ...autoSizerProps
}) => (
  <div
    style={{
      height: height ? height : '100%',
      overflow: 'auto',
      width: width ? width : '100%'
    }}>
    <style jsx global>{`
      ::-webkit-scrollbar {
        width: 0px; /* Remove scrollbar space */
        display: none;
      }
    `}</style>
    <AutoSizer {...autoSizerProps}>
      {size => (
        <FixedSizeList
          itemSize={itemSize}
          itemCount={itemCount}
          overscanCount={overscanCount}
          onItemsRendered={onItemsRendered}
          onScroll={onScroll}
          initialScrollOffset={initialScrollOffset}
          {...size}>
          {children}
        </FixedSizeList>
      )}
    </AutoSizer>
  </div>
);
