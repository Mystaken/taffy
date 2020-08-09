export const mockComicIssue = (issue?: Partial<ComicIssue>): ComicIssue => ({
  title: 'Mock Issue',
  pages: [
    'https://via.placeholder.com/800x1200',
    'https://via.placeholder.com/800x1200'
  ],
  coverImage: 'https://via.placeholder.com/100x50',
  membership: 'VIP',
  ...issue
});

export const mockComicIssueMeta = (
  issue?: Partial<ComicIssueMeta>
): ComicIssueMeta => ({
  title: 'Mock Issue',
  numPages: 0,
  coverImage: 'https://via.placeholder.com/100x50',
  membership: 'VIP',
  ...issue
});

export const mockComic = (comic?: Partial<Comic>): Comic => ({
  id: '0',
  title: 'title',
  description: 'description',
  rating: 1,
  genres: [],
  issues: [],
  authors: [],
  categories: [],
  status: 'active',
  ...comic
});
