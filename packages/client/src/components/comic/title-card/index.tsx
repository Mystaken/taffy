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

export interface TitleCardProps {
  comic: Comic;
  onAddRating?: (rating: number) => void;
}

const ComicRating = withStyles(_ => ({
  root: { fontSize: '24px' }
}))(Rating);

export const TitleCard: FunctionComponent<TitleCardProps> = ({
  comic,
  children,
  onAddRating
}) => {
  const classes = makeStyles(_ => ({
    backgroundImage: {
      top: 0,
      position: 'fixed',
      display: 'block',
      objectFit: 'contain',
      backgroundImage: `url('${
        comic.desktopCoverImage ?? 'https://via.placeholder.com/1980x1080'
      }')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      width: '100vw',
      minHeight: '100vh',
      overflowX: 'hidden',
      overflowY: 'hidden',
      zIndex: -1
    },
    container: {
      boxShadow: '1px 2px 3px rgba(0,0,0,.5)',
      backdropFilter: 'blur(20px)',
      marginTop: '65vh',
      minHeight: '35vh',
      backgroundColor: 'rgb(0,0,0, 0.4)'
    },
    title: {
      fontWeight: 'bold'
    },
    description: {
      minHeight: '150px',
      maxHeight: '250px',
      overflowY: 'scroll'
    },
    footer: {
      backgroundColor: 'rgb(0,0,0, 0.3)',
      backdropFilter: 'blur(20px)',
      padding: 0,
      margin: 0
    },
    children: {
      marginTop: '24px'
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

  return (
    <div>
      <div className={classes.backgroundImage}></div>
      <div className={classes.container}>
        <Container maxWidth="md">
          <Typography color="secondary" variant="h5">
            {comic.genres.join(', ')}
          </Typography>
          {/* Title */}
          <ColorTypography color="white" variant="h2" className={classes.title}>
            Lone Ranger
          </ColorTypography>

          <Typography color="textSecondary" variant="h5">
            {comic.authors.join(', ')}
          </Typography>

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
                <Typography variant="h5" color="secondary">
                  ({comic.rating} / 5)
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.description}>
            <ColorTypography variant="h6" color="lightgrey">
              {comic.description}
            </ColorTypography>
          </div>
          {/** Rating */}
          <div>
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
          </div>
          <div className={classes.children}>{children}</div>
        </Container>
        <Footer transparent />
      </div>

      <RatingSelectDialog
        defaultRating={comic.userRating ? comic.userRating : comic.rating}
        open={ratingDialogOpen}
        onClose={handleRatingDialogClose}
        onSubmitRate={handleAddRating}></RatingSelectDialog>
    </div>
  );
};
