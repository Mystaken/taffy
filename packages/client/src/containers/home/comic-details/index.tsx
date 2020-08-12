import React, { FunctionComponent } from 'react';

import { useAsync } from '../../../hooks/async.hook';
import { getComicById } from '../../../services/comics/get-comic-by-id';
import { TitleCard } from '../../../components/comic/title-card';
import { IssueSelector } from '../../../components/comic/issue-selector';

export interface ComicDetailsProps {
  comicId: string;
}

export const ComicDetails: FunctionComponent<ComicDetailsProps> = ({
  comicId
}) => {
  const [comic] = useAsync<Comic>(() => getComicById(comicId), [comicId]);
  if (!comic) {
    return null;
  }
  return (
    <TitleCard comic={comic}>
      <IssueSelector issues={comic.issues} />
    </TitleCard>
  );
};
