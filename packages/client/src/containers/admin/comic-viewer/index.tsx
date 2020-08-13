import React, { FunctionComponent } from 'react';
import { useAsync } from '../../../hooks/async.hook';
import { getAllComics } from '../../../services/comics/get-all-comics';
import { ComicCard } from '../../../components/comic/comic-card';

export interface ComicViewerProps {
  onClick?: (comic: Comic) => void;
}

export const ComicViewer: FunctionComponent<ComicViewerProps> = ({
  onClick
}) => {
  const { value: comics } = useAsync(() => getAllComics(), []);
  if (!comics) return null;

  return (
    <>
      {comics.map(c => (
        <ComicCard
          key={c.id}
          image={c.coverImage}
          title={c.title}
          width={200}
          onClick={() => onClick?.(c)}
        />
      ))}
    </>
  );
};
