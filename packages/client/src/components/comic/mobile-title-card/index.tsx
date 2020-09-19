import React, { FunctionComponent, useState } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { RatingSelectDialog } from '../../dialogs/rating-selection-dialog';
import {
  RatingButton,
  DescriptionTypography,
  RatingTypography,
  AuthorTypography,
  GenreTypography,
  TitleTypography,
  ComicRating
} from './styles';

const MAX_TITLE_LENGTH = 30;

export interface MobileTitleCardProps {
  comic: Comic;
  onAddRating?: (rating: number) => void;
}

const MobileTitleCard: FunctionComponent<MobileTitleCardProps> = ({
  comic,
  onAddRating
}) => {
  const classes = makeStyles(_ => ({
    backgroundImage: {
      position: 'relative',
      backgroundImage: `url(${comic.mobileCoverImage})`,
      backgroundSize: 'cover',
      width: '100%',
      paddingBottom: '75%',
      overflowX: 'hidden',
      overflowY: 'hidden'
    },
    info: {
      position: 'absolute',
      width: '45%',
      height: '100%',
      top: 10,
      margin: '40px 12px 0px 12px'
    },
    description: {
      maxHeight: '10vh',
      overflowY: 'scroll'
    },
    rating: {
      position: 'absolute',
      width: '100%',
      bottom: 12,
      left: 0,
      margin: '40px 12px 0px 12px'
    }
  }))();

  const [ratingDialogOpen, setRatingDialogOpen] = useState(false);
  const handleRatingDialogOpen = () => {
    setRatingDialogOpen(true);
  };
  const handleRatingDialogClose = () => {
    setRatingDialogOpen(false);
  };
  const handleAddRating = (rating: number) => {
    onAddRating?.(rating);
    handleRatingDialogClose();
  };
  const title =
    comic.title.length > MAX_TITLE_LENGTH
      ? `${comic.title.slice(0, MAX_TITLE_LENGTH - 3)}...`
      : comic.title;
  return (
    <>
      <div className={classes.backgroundImage}>
        <div className={classes.info}>
          <Grid container direction="column">
            {/** Genres */}
            <Grid item>
              <GenreTypography color="secondary">
                {comic.genres.join(' ')}
              </GenreTypography>
            </Grid>

            {/** Title */}
            <Grid item>
              <TitleTypography variant="h2" color="textSecondary">
                {title}
              </TitleTypography>
            </Grid>

            {/** Authors */}
            <Grid item>
              <AuthorTypography color="textSecondary">
                {comic.authors.join(' ')}
              </AuthorTypography>
            </Grid>

            {/** Rating */}
            <Grid item>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <ComicRating
                    readOnly
                    name="half-rating"
                    size="small"
                    value={comic.rating}
                    color="secondary"
                    precision={0.5}
                  />
                </Grid>
                <Grid item>
                  <RatingTypography variant="body2" color="secondary">
                    ({comic.rating} / 5)
                  </RatingTypography>
                </Grid>
              </Grid>
            </Grid>

            {/** Description */}
            <Grid item className={classes.description}>
              <DescriptionTypography variant="body2">
                {comic.description}
              </DescriptionTypography>
            </Grid>
          </Grid>
        </div>

        {/** Rating */}
        <div className={classes.rating}>
          <Grid container>
            <Grid item>
              <RatingButton
                variant="extended"
                color="secondary"
                onClick={handleRatingDialogOpen}>
                Rate
              </RatingButton>
            </Grid>
          </Grid>
        </div>
        <RatingSelectDialog
          open={ratingDialogOpen}
          onClose={handleRatingDialogClose}
          onSubmitRate={handleAddRating}></RatingSelectDialog>
      </div>
    </>
  );
};
export default MobileTitleCard;
