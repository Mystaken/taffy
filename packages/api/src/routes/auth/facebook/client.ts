import got from 'got';

export default 1;

export interface FacebookPayload {
  id: string;
  lastName: string;
  firstName: string;
  email: string;
}

export const getFacebookUserInformation = async (
  accessToken: string
): Promise<FacebookPayload> => {
  const searchParams = new URLSearchParams([
    ['fields', 'first_name,last_name,email'],
    ['access_token', accessToken]
  ]) as any;

  const response = await got
    .get('https://graph.facebook.com/me', { searchParams })
    .json<any>();

  const payload = {
    id: response.id,
    firstName: response.first_name,
    lastName: response.last_name,
    email: response.email
  };
  return payload;
};
