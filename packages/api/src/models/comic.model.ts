import mongoose from 'mongoose';
import { TModelStatus } from './types';
import { FileSchema, FileEntry } from './file.model';

const ComicIssueSchema = new mongoose.Schema({
  title: { type: String, required: true },
  pages: { type: [FileSchema], required: true, default: [] },
  originalImage: { type: FileSchema, required: true },
  coverImage: { type: String, required: true },
  membership: { type: String, required: true }
});

const ComicRatingSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  comicId: { type: String, required: true },
  rating: { type: Number, required: true }
});

const ComicSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    genres: { type: [String], required: true },
    categories: { type: [String], required: true },
    authors: { type: [String], required: true },
    coverImage: { type: FileSchema },
    mobileCoverImage: { type: FileSchema },
    desktopCoverImage: { type: FileSchema },
    comicBannerImage: { type: FileSchema },
    ratings: { type: [ComicRatingSchema], required: true, default: [] },
    issues: { type: [ComicIssueSchema], required: true, default: [] },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      required: true,
      default: 'active'
    }
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

export interface ComicRating {
  userId: string;
  comicId: string;
  rating: number;
}

export interface ComicIssue {
  title: string;
  pages: FileEntry[];
  originalImage: FileEntry;
  coverImage: FileEntry;
  membership: string;
}

export interface TComicModel {
  id: string;
  title: string;
  description: string;
  genres: string[];
  categories: string[];
  authors: string[];
  //800x600
  coverImage?: FileEntry;
  //1980x1080
  mobileCoverImage?: FileEntry;
  desktopCoverImage?: FileEntry;
  comicBannerImage?: FileEntry;
  ratings: ComicRating[];
  issues: ComicIssue[];
  status: TModelStatus;
}

interface ComicIssueMeta extends Omit<ComicIssue, 'pages'> {
  numPages: number;
}
export interface Comic {
  id: string;
  title: string;
  description: string;
  genres: string[];
  categories: string[];
  authors: string[];
  coverImage?: string;
  mobileCoverImage?: string;
  desktopCoverImage?: string;
  comicBannerImage?: string;
  status: TModelStatus;
  rating: number;
  issues: ComicIssueMeta[];
}

export const ComicModel = mongoose.model('comic', ComicSchema);
