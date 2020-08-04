import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: false },
    googleID: { type: String, required: false },
    facebookID: { type: String, required: false },
    lastLogin: { type: Date, required: true, default: Date.now() },
    active: { type: Boolean, required: true, default: true }
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
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  active: boolean;
}

export interface User extends TUserModel {
  id: string;
  createdAt: string;
  updatedAt: string;
  lastLogin: string;
}

export const userModel = mongoose.model('users', userSchema);
