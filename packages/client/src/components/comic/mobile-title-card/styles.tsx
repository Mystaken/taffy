import { withStyles, Typography, Fab } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

export const TitleTypography = withStyles(_ => ({
  root: {
    fontSize: '5.5vw'
  }
}))(Typography);

export const DescriptionTypography = withStyles(_ => ({
  root: {
    fontSize: '3vw'
  }
}))(Typography);

export const GenreTypography = withStyles(_ => ({
  root: {
    fontSize: '3vw'
  }
}))(Typography);

export const AuthorTypography = withStyles(_ => ({
  root: {
    fontSize: '3vw',
    color: '#b6adff'
  }
}))(Typography);

export const RatingTypography = withStyles(_ => ({
  root: { fontSize: '3vw' }
}))(Typography);

export const ComicRating = withStyles(_ => ({
  root: { fontSize: '4vw' }
}))(Rating);

export const RatingButton = withStyles(_ => ({
  root: {
    fontSize: '3vw',
    height: '7vw',
    width: '10vw',
    minWidth: '10vw',
    borderRadius: '10px'
  }
}))(Fab);
