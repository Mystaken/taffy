import React, { FunctionComponent } from 'react';
import {
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Grid
} from '@material-ui/core';
import { WithRipple } from '../../buttons/with-ripple';

export interface BannerPanelProps {
  image: string;
  text?: string;
  width?: number;
  onClick?: () => void;
}

export const Banner: FunctionComponent<BannerPanelProps> = ({
  image,
  text,
  onClick,
  width = 800
}) => {
  const classes = makeStyles(_ => ({
    card: {
      width
    },
    media: {
      height: (width / 800) * 200
    },
    wrapper: {
      position: 'absolute',
      top: 0,
      left: 0,
      width,
      height: (width / 800) * 200,
      padding: 10
    },
    titleText: {
      fontSize: '5vw',
      maxWidth: width / 2,
      overflow: 'wrap'
    }
  }))();
  const CardArea = WithRipple(CardActionArea);
  return (
    <Card className={classes.card} square onClick={onClick}>
      <CardArea rippleColor="white">
        <CardMedia image={image} title={text} className={classes.media} />
        {text && (
          <Grid
            container
            direction="column"
            alignItems="stretch"
            justify="center"
            className={classes.wrapper}>
            <Grid item>
              <Grid container direction="row">
                <Typography color="textSecondary" className={classes.titleText}>
                  {text}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        )}
      </CardArea>
    </Card>
  );
};
