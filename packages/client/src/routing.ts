export const pages = {
  homepage: '/',
  admin: {
    comicViewer: '/admin',
    comicCreation: '/admin/comic/create',
    comicEdit: (comicId: string) => `/admin/comic/${comicId}`
  },
  comic: {
    comicDetails: (comicId: string) => `/comic/${comicId}`,
    comicIssueViewer: (comicId: string, issueNumber: number) =>
      `/comic/${comicId}/${issueNumber}`
  },
  membership: {
    payment: '/membership/payment',
    success: '/membership/payment/success'
  }
};
