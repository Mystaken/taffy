import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String, required: false },
    googleId: { type: String, required: false },
    facebookId: { type: String, required: false },
    lastLogin: { type: Date, required: true, default: Date.now() },
    active: { type: Boolean, required: true, default: true },
    customerId: { type: String, required: true },
    isVip: { type: Boolean, required: true, default: false },
    isAdmin: { type: Boolean, required: true, default: false }
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (_doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      }
    },
    versionKey: false
  }
);

export interface TUserModel {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  active: boolean;
  customerId: string;
  googleId?: string;
  facebookId?: string;
}

export interface User extends TUserModel {
  id: string;
  createdAt: string;
  updatedAt: string;
  lastLogin: string;
  isVip: boolean;
  isAdmin: boolean;
}

export const UserModel = mongoose.model('users', UserSchema);
