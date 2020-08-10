import { FunctionComponent } from 'react';
import { AutoSlider } from '../../../components/silders/auto-slider';
import { AutoSliderItem } from '../../../components/silders/auto-slider/item';
export interface AutoplayPanelProps {
  comics: Comic[];
}

const DEFAULT_IMG = 'static/comic/800x600.png';

export const AutoplayPanel: FunctionComponent<AutoplayPanelProps> = ({
  comics
}) => {
  const panels =
    comics.length > 0
      ? comics.map(comic => ({
          comicId: comic.id,
          panelImage: comic.comicBannerImage ?? DEFAULT_IMG
        }))
      : [{ panelImage: DEFAULT_IMG, comicId: '' }];

  return (
    <AutoSlider>
      {panels.map((panel, index) => (
        <AutoSliderItem
          image={panel.panelImage}
          onClick={() => console.log(panel)}
          key={index}></AutoSliderItem>
      ))}
    </AutoSlider>
  );
};
