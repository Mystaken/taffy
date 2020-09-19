import React, { FunctionComponent } from 'react';
import { pathOr } from 'ramda';
import { Container, Grid } from '@material-ui/core';

import { useAsync } from '../../../hooks/async.hook';
import { getComicById } from '../../../services/comics/get-comic-by-id';
import { TitleCard } from '../../../components/comic/title-card';
import { IssueSelector } from '../../../components/comic/issue-selector';
import { addComicRating } from '../../../services/comics/ratings/add-comic-rating';
import MobileTitleCard from '../../../components/comic/mobile-title-card';
import { getCurrentUser } from '../../../services/auth/user-cookie';

export interface ComicDetailsProps {
  comicId: string;
  isDesktop?: boolean;
  onGetVIP?: () => void;
  onIssueSelect?: (issue: ComicIssue, index: number, comic: Comic) => void;
}

export const ComicDetails: FunctionComponent<ComicDetailsProps> = ({
  comicId,
  onGetVIP,
  onIssueSelect,
  isDesktop = true
}) => {
  const { value: comic, setValue: setComic } = useAsync(
    () => getComicById(comicId),
    [comicId]
  );

  const user = getCurrentUser();

  const ComicTitleCard = isDesktop ? TitleCard : MobileTitleCard;

  if (!comic) {
    return null;
  }

  const handleOnAddRating = async (rating: number) => {
    const newComic = await addComicRating(comic.id, rating);
    setComic(newComic);
  };

  return (
    <div>
      <ComicTitleCard
        comic={comic}
        onAddRating={handleOnAddRating}></ComicTitleCard>
      <Grid
        container
        justify="center"
        style={{ width: '100%', minWidth: 1200 }}>
        <div style={{ width: 1200 }}>
          <IssueSelector
            isVip={pathOr(false, ['isVip'], user)}
            issues={comic.issues}
            onGetVIP={onGetVIP}
            onIssueSelect={(issue, index) =>
              onIssueSelect?.(issue, index, comic)
            }
          />
        </div>
      </Grid>
    </div>
  );
};
