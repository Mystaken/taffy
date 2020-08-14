export const pages = {
  homepage: '/',
  admin: {
    comicViewer: '/admin/comics',
    comicCreation: '/admin/comics/create',
    comicEdit: (comicId: string) => `/admin/comics/${comicId}`
  },
  comics: {
    comicDetails: (comicId: string) => `/comics/${comicId}`,
    comicIssueViewer: (comicId: string, issueNumber: number) =>
      `/comics/${comicId}/${issueNumber}`
  },
  membership: {
    payment: '/membership/payment',
    success: '/membership/payment/success'
  }
};
