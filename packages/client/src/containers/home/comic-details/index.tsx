import React, { FunctionComponent } from 'react';

import { useAsync } from '../../../hooks/async.hook';
import { getComicById } from '../../../services/comics/get-comic-by-id';
import { TitleCard } from '../../../components/comic/title-card';
import { IssueSelector } from '../../../components/comic/issue-selector';
import { addComicRating } from '../../../services/comics/ratings/add-comic-rating';

export interface ComicDetailsProps {
  comicId: string;
}

export const ComicDetails: FunctionComponent<ComicDetailsProps> = ({
  comicId
}) => {
  const { value: comic, setValue: setComic } = useAsync(
    () => getComicById(comicId),
    [comicId]
  );

  if (!comic) {
    return null;
  }

  const handleOnAddRating = async (rating: number) => {
    const newComic = await addComicRating(comic.id, rating);
    setComic(newComic);
  };

  return (
    <TitleCard comic={comic} onAddRating={handleOnAddRating}>
      <IssueSelector issues={comic.issues} />
    </TitleCard>
  );
};
