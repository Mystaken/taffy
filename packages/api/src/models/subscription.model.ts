import mongoose, { Schema } from 'mongoose';

export const SubscriptionSchema = new Schema(
  {
    subscriptionId: { type: String, required: true },
    status: {
      type: String,
      enum: [
        'active',
        'past_due',
        'unpaid',
        'canceled',
        'incomplete',
        'incomplete_expired',
        'trialing',
        'all',
        'ended'
      ],
      required: true,
      default: 'active'
    },
    userId: { type: String, required: true },
    customerId: { type: String, required: true }
  },
  {
    toJSON: {
      transform: function (_doc, ret) {
        delete ret._id;
      }
    },
    versionKey: false
  }
);

export enum SubscriptionStatus {
  active = 'active',
  past_due = 'past_due',
  unpaid = 'unpaid',
  canceled = 'canceled',
  incomplete = 'incomplete',
  incomplete_expired = 'incomplete_expired',
  trialing = 'trialing',
  all = 'all',
  ended = 'ended'
}

export interface TSubscriptionModel {
  subscriptionId: string;
  userId: string;
  customerId: string;
  status?: SubscriptionStatus;
}

export interface Subscription extends TSubscriptionModel {
  id: string;
  status: SubscriptionStatus;
}

export const SubscriptionModel = mongoose.model(
  'subscription',
  SubscriptionSchema
);
