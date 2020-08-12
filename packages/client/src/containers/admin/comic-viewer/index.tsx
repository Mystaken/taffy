import React, { FunctionComponent } from 'react';
import { useAsync } from '../../../hooks/async.hook';
import { getAllComics } from '../../../services/comics/get-all-comics';
import { ComicCard } from '../../../components/comic/comic-card';

export const ComicViewer: FunctionComponent = () => {
  const [comics] = useAsync(() => getAllComics(), []);
  if (!comics) return null;

  return (
    <>
      {comics.map(c => (
        <ComicCard
          key={c.id}
          image={c.coverImage}
          title={c.title}
          width={200}
        />
      ))}
    </>
  );
};
