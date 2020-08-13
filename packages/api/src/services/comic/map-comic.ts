import { TComicModel, Comic } from '../../models/comic.model';
import { ComicMembership } from '../../models/types';

export interface MapComicOptions {
  userId?: string;
}

export const mapComic = (
  {
    ratings,
    coverImage,
    desktopCoverImage,
    mobileCoverImage,
    comicBannerImage,
    issues: comicIssues,
    ...comic
  }: TComicModel,
  options: MapComicOptions = {}
): Comic => {
  const allRatings = Object.values(ratings);
  const numRatings = allRatings.length > 0 ? allRatings.length : 1;
  const rating = allRatings.reduce((a, b) => a + b, 0) / numRatings;

  const issues = comicIssues.map(
    ({ pages, coverImage, title, membership }) => ({
      pages: pages.map(p => p.url),
      coverImage: coverImage.url,
      numPages: pages.length,
      title,
      membership: membership as ComicMembership
    })
  );

  const result: Comic = {
    ...comic,
    coverImage: coverImage?.url,
    desktopCoverImage: desktopCoverImage?.url,
    mobileCoverImage: mobileCoverImage?.url,
    comicBannerImage: comicBannerImage?.url,
    rating,
    issues
  };
  if (options.userId) {
    result.userRating = ratings[options.userId];
  }
  return result;
};
