import { comicAPI, ComicAPISuccessResponse } from '../../../api/comic.api';

export interface CreateComicIssueSubmission {
  title: string;
  membership: string;
  issue: File;
  coverImage: File;
}

export const createComicIssue = async (
  comicId: string,
  issue: CreateComicIssueSubmission
) => {
  const form = new FormData();
  Object.entries(issue).forEach(([k, v]) => {
    form.append(k, v);
  });
  const { response } = await comicAPI
    .post(`comics/${comicId}/issues`, {
      body: form
    })
    .json<ComicAPISuccessResponse<Comic>>();
  return response;
};
