interface ComicIssue {
  title: string;
  pages: string[];
  coverImage: string;
  membership: string;
}

interface ComicIssueMeta extends Omit<ComicIssue, 'pages'> {
  numPages: number;
}

interface Comic {
  id: string;
  rating: number;
  issues: ComicIssueMeta[];
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
