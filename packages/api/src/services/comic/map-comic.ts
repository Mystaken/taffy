import { TComicModel, Comic } from '../../models/comic.model';

export const mapComic = ({
  ratings,
  coverImage,
  desktopCoverImage,
  mobileCoverImage,
  comicBannerImage,
  issues: comicIssues,
  ...comic
}: TComicModel): Comic => {
  const numRatings = ratings.length > 0 ? ratings.length : 1;
  const rating = ratings.reduce((a, b) => a + b.rating, 0) / numRatings;
  const issues = comicIssues.map(
    ({ pages, coverImage, title, membership }) => ({
      pages: pages.map(p => p.url),
      coverImage: coverImage.url,
      numPages: pages.length,
      title,
      membership
    })
  );

  return {
    ...comic,
    coverImage: coverImage?.url,
    desktopCoverImage: desktopCoverImage?.url,
    mobileCoverImage: mobileCoverImage?.url,
    comicBannerImage: comicBannerImage?.url,
    rating,
    issues
  };
};
