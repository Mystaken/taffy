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
  id: string;
  title: string;
  description: string;
  genres: string[];
  categories: string[];
  authors: string[];
  //800x600
  coverImage?: string;
  //1980x1080
  mobileCoverImage?: string;
  desktopCoverImage?: string;
  comicBannerImage?: string;
  status: TModelStatus;
}
