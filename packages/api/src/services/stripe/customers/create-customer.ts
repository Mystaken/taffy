import { StripeClient } from '../client';

export interface CreateCustomerParams {
  firstName?: string;
  lastName?: string;
  email?: string;
}

export const createCustomer = async ({
  firstName,
  lastName,
  email
}: CreateCustomerParams) => {
  const customer = await StripeClient.customers.create({
    name: `${firstName} ${lastName}`,
    email
  });

  return customer;
};
