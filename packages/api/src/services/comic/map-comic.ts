import { TComicModel, Comic } from '../../models/comic.model';

export const mapComic = ({
  ratings,
  issues,
  ...comic
}: TComicModel): Comic => ({
  ...comic,
  rating: ratings.reduce((a, b) => a + b.rating, 0),
  issues: issues.map(({ pages, ...issue }) => ({
    ...issue,
    numPages: pages.length
  }))
});
