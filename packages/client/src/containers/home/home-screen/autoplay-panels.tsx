import React, { FunctionComponent } from 'react';
import { AutoSlider } from '../../../components/silders/auto-slider';
import { AutoSliderItem } from '../../../components/silders/auto-slider/item';

export interface AutoplayPanelProps {
  comics: Comic[];
  onPanelClick?: (comic: Comic, index: number) => void;
}

const DEFAULT_IMG = 'static/comic/800x600.png';

export const AutoplayPanel: FunctionComponent<AutoplayPanelProps> = ({
  comics,
  onPanelClick
}) => {
  const panels =
    comics.length > 0
      ? comics.map(comic => ({
          comicId: comic.id,
          panelImage: comic.bannerImage ?? DEFAULT_IMG
        }))
      : [{ panelImage: DEFAULT_IMG, comicId: '' }];

  const handlePanelOnClick = (index: number) => {
    if (comics.length > index) {
      onPanelClick?.(comics[index], index);
    }
  };

  return (
    <AutoSlider>
      {panels.map((panel, index) => (
        <AutoSliderItem
          image={panel.panelImage}
          onClick={() => handlePanelOnClick(index)}
          key={index}></AutoSliderItem>
      ))}
    </AutoSlider>
  );
};
