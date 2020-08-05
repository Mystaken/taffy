import { TComicModel, Comic } from '../../models/comic.model';

export const mapComic = ({
  ratings,
  issues: comicIssues,
  ...comic
}: TComicModel): Comic => {
  const numRatings = ratings.length > 0 ? ratings.length : 1;
  const rating = ratings.reduce((a, b) => a + b.rating, 0) / numRatings;
  const issues = comicIssues.map(({ pages, ...issue }) => ({
    ...issue,
    numPages: pages.length
  }));
  return {
    ...comic,
    rating,
    issues
  };
};
