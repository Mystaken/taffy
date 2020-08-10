/**
 * https://github.com/oliviertassinari/react-swipeable-views/tree/master/packages/react-swipeable-views-utils
 */

declare module 'react-swipeable-views-utils' {
  import ReactSwipeableViews, {
    SwipeableViewsProps
  } from 'react-swipeable-views';

  /**
   * virtualized
   */
  export interface VirtualizedSlideRendererParams {
    index: number;
    key: number;
  }

  interface VirtualizedComponentProps extends SwipeableViewsProps {
    index?: number;
    onChangeIndex?: (currentIndex: number, prevIndex: number) => void;
    onTransitionEnd?: () => void;
    overscanSlideAfter?: number;
    overscanSlideBefore?: number;
    slideCount?: number;
    slideRenderer: (params: VirtualizedSlideRendererParams) => JSX.Element;
  }

  interface VirtualizedComponentState {
    indexContainer: number;
    indexStart: number;
    indexStop: number;
  }

  class VirtualizedComponent extends React.Component<
    VirtualizedComponentProps,
    VirtualizedComponentState
  > {
    handleChangeIndex(indexContainer: number, indexLatest: number): void;
    handleTransitionEnd(): void;
    setIndex(index: number, indexContainer: number, indexDiff: number): void;
    setWindow(index: number): void;
  }

  export function virtualize(
    component: typeof ReactSwipeableViews
  ): typeof VirtualizedComponent;

  /**
   * autoplay
   */
  interface AutoPlayProps extends Omit<SwipeableViewsProps, 'ref'> {
    /**
     * If `false`, the auto play behavior is disabled.
     */
    autoplay?: boolean;
    /**
     * This is the auto play direction.
     */
    direction?: 'incremental' | 'decremental';
    /**
     * Delay between auto play transitions (in ms).
     */
    interval?: number;
    index?: number;
    onChangeIndex?: (index: number, latestIndex: number) => void;
    onSwitching?: (index: number, type: string) => void;
    slideCount?: number;
  }
  interface AutoPlayState {
    index: number;
  }

  class AutoPlayComponent extends React.Component<
    AutoPlayProps,
    AutoPlayState
  > {
    handleChangeIndex(indexContainer: number, indexLatest: number): void;
    handleTransitionEnd(): void;
    setIndex(index: number, indexContainer: number, indexDiff: number): void;
    setWindow(index: number): void;
  }
  export function autoPlay(
    component: typeof ReactSwipeableViews
  ): typeof AutoPlayComponent;
}
