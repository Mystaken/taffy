import mongoose from 'mongoose';

const ComicSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    genres: { type: [String], required: true },
    categories: { type: [String], required: true },
    author: { type: [String], required: true },
    coverImage: { type: String, required: true },
    mobileCoverImage: { type: String, required: true },
    desktopCoverImage: { type: String, required: true },
    comicBannerImage: { type: String, required: true }
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
export interface TComicModel {
  title: string;
  description: string;
  genres: string[];
  categories: string[];
  author: string[];
  coverImage: string;
  mobileCoverImage: string;
  desktopCoverImage: string;
  comicBannerImage: string;
}

export interface Comic extends TComicModel {}

export const ComicModel = mongoose.model('users', ComicSchema);
