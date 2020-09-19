import { FunctionComponent } from 'react';
import {
  makeStyles,
  CardActionArea,
  Card,
  CardMedia,
  Typography
} from '@material-ui/core';

import { WithRipple } from '../../buttons/with-ripple';
import { generateGradient } from '../../../libs/gradient';

const gradient = generateGradient(180, [0, 0, 0], 4, sec => sec ** 0.7);

export interface ComicProps {
  image?: string;
  title: string;
  width: number;
  hasTitle?: boolean;
  fontSize?: string;
  onClick?: () => void;
}

export const ComicCard: FunctionComponent<ComicProps> = ({
  image,
  title,
  width,
  hasTitle = true,
  fontSize,
  onClick
}) => {
  const maxChars = width / 4;
  if (!hasTitle) {
    title = '';
  } else if (title.length > maxChars) {
    title = `${title.slice(0, maxChars)}...`;
  }
  const background = title.length > 0 ? gradient : '';

  const classes = makeStyles(_ => ({
    card: {
      width
    },
    media: {
      height: width / 0.75
    },
    titleWrapper: {
      position: 'absolute',
      bottom: 0,
      paddingLeft: 3,
      paddingRight: 3,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      width: '100%',
      background,
      height: width / 4
    },
    title: {
      fontSize: fontSize ? fontSize : `${width ** 0.7 / 50}rem`
    }
  }))();

  const CardArea = WithRipple(CardActionArea);

  return (
    <Card className={classes.card} square onClick={onClick}>
      <CardArea rippleColor="white">
        <CardMedia image={image} title={title} className={classes.media} />
        <div className={classes.titleWrapper}>
          <Typography variant="caption" className={classes.title}>
            {title}
          </Typography>
        </div>
      </CardArea>
    </Card>
  );
};
