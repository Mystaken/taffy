type ComicMembership = 'VIP' | 'Free';

interface ComicIssue {
  title: string;
  pages?: string[];
  coverImage: string;
  membership: ComicMembership;
  numPages: number;
}

interface Comic {
  id: string;
  rating: number;
  issues: ComicIssue[];
  title: string;
  description: string;
  genres: string[];
  categories: string[];
  authors: string[];
  cardImage?: string;
  mobileCoverImage?: string;
  desktopBackgroundImage?: string;
  desktopForegroundImage?: string;
  bannerImage?: string;
  status: TModelStatus;
  userRating?: number;
}
