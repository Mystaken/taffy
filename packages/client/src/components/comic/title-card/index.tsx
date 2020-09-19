import React, { FunctionComponent, useState } from 'react';
import {
  makeStyles,
  Container,
  Typography,
  Grid,
  withStyles,
  Button
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { ColorTypography } from '../../primitives/typography/colored-typography';
import { Footer } from '../../layouts/footer';
import { RatingSelectDialog } from '../../dialogs/rating-selection-dialog';
import { CenteredBanner } from '../../banners/centered-banner';

export interface TitleCardProps {
  comic: Comic;
  onAddRating?: (rating: number) => void;
}

const ComicRating = withStyles(_ => ({
  root: { fontSize: '24px' }
}))(Rating);

export const TitleCard: FunctionComponent<TitleCardProps> = ({
  comic,
  onAddRating
}) => {
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

  return (
    <>
      <CenteredBanner
        height={300}
        foregroundImg={comic.desktopForegroundImage}
        backgroundImg={comic.desktopBackgroundImage}
        containerWidth={1200}>
        <div
          style={{
            width: 600,
            display: 'flex',
            height: '100%'
          }}>
          <Grid
            container
            direction="column"
            justify="space-between"
            style={{
              paddingTop: 24,
              paddingLeft: 36,
              paddingBottom: 24
            }}>
            <Grid item>
              <Typography color="secondary" variant="h6">
                {comic.genres.join(', ')}
              </Typography>
              <ColorTypography color="white" variant="h4" style={{}}>
                Lone Ranger
              </ColorTypography>
              <ColorTypography color="textSecondary" variant="body1">
                {comic.authors.join(', ')}
              </ColorTypography>
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
              </Grid>
              <div
                style={{
                  minHeight: '80px',
                  maxHeight: '120px',
                  overflowY: 'auto'
                }}>
                <ColorTypography variant="body2" color="lightgrey">
                  {comic.description}
                </ColorTypography>
              </div>
            </Grid>
            <Grid item>
              {/** Rating */}
              <Grid container>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleRatingDialogOpen}>
                    Rate
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </CenteredBanner>
      <RatingSelectDialog
        defaultRating={comic.userRating ? comic.userRating : comic.rating}
        open={ratingDialogOpen}
        onClose={handleRatingDialogClose}
        onSubmitRate={handleAddRating}></RatingSelectDialog>
    </>
  );
};
