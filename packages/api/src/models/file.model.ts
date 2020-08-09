import { Schema } from 'mongoose';

export const FileSchema = new Schema(
  {
    url: { type: String, required: true },
    key: { type: String, required: true },
    bucket: { type: String, required: true },
    etag: { type: String, required: true }
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

export interface FileEntry {
  url: string;
  key: string;
  bucket: string;
  etag: string;
}
