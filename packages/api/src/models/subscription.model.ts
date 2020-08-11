import mongoose, { Schema } from 'mongoose';

export const SubscriptionSchema = new Schema(
  {
    subscriptionId: { type: String, required: true },
    status: { type: String, required: true, default: 'active' },
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

export interface TSubscriptionModel {
  subscriptionId: string;
  userId: string;
  customerId: string;
}

export interface Subscription extends TSubscriptionModel {
  id: string;
  status: string;
}

export const SubscriptionModel = mongoose.model(
  'subscription',
  SubscriptionSchema
);
