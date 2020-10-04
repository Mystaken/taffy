import React, { FC } from 'react';

export interface CenteredBannerProps {
  height: number;
  containerWidth: number;
  foregroundImg?: string;
  backgroundImg?: string;
}

const DEFAULT_BACKGROUND = 'static/comic/1800x300.png';
const DEFAULT_FOREGROUND = 'static/comic/1000x300.png';

export const CenteredBanner: FC<CenteredBannerProps> = ({
  height,
  backgroundImg = DEFAULT_BACKGROUND,
  foregroundImg = DEFAULT_FOREGROUND,
  containerWidth,
  children
}) => {
  return (
    <div
      style={{
        width: '100%',
        minHeight: height,
        backgroundImage: `url('${backgroundImg}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      }}>
      <div
        style={{
          backgroundImage: `url('${foregroundImg}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minHeight: height,
          width: containerWidth
        }}>
        {children}
      </div>
    </div>
  );
};
