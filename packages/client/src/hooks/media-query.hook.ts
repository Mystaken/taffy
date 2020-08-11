import { useMediaQuery, useTheme, Theme } from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { useState, useEffect } from 'react';

export const useWiderThan: (sizePixel: number) => boolean = sizePixel => {
  return useMediaQuery(`(min-width:${sizePixel}px)`);
};

export const useSmallerThan: (sizePixel: number) => boolean = sizePixel => {
  return useMediaQuery(`(max-width:${sizePixel}px)`);
};

export const useWidth: () => Breakpoint = () => {
  const theme: Theme = useTheme();
  const keys: Breakpoint[] = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output: Breakpoint | null, key: Breakpoint) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
};

export interface Dimension {
  width: number;
  height: number;
}

const getWindowDimensions: () => Dimension = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
};

export const useDimension: () => Dimension = () => {
  const [windowDimensions, setWindowDimensions] = useState<Dimension>({
    height: 0,
    width: 0
  });

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export const useIsDesktop = () => useWiderThan(600);
