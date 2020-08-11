import { comicAPI, ComicAPISuccessResponse } from '../../api/comic.api';

export interface GetTaffyMembershipResponse {
  productId: string;
  priceId: string;
  currency: number;
  recurring?: {
    interval: 'day' | 'month' | 'week' | 'year';
    intervalCount: number;
  };
  unitAmount: number;
}
export const getTaffyMembership = async () => {
  console.log(2);
  const { response } = await comicAPI
    .get('membership')
    .json<ComicAPISuccessResponse<GetTaffyMembershipResponse>>();
  console.log(1);
  return response;
};
