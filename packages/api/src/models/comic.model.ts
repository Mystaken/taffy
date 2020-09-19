import mongoose from 'mongoose';
import { TModelStatus, ComicMembership } from './types';
import { FileSchema, FileEntry } from './file.model';

const ComicIssueSchema = new mongoose.Schema({
  title: { type: String, required: true },
  pages: { type: [FileSchema], required: true, default: [] },
  originalImage: { type: FileSchema, required: true },
  coverImage: { type: FileSchema, required: true },
  membership: { type: String, required: true }
});

const ComicSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    genres: { type: [String], required: true },
    categories: { type: [String], required: true },
    authors: { type: [String], required: true },
    cardImage: { type: FileSchema },
    mobileCoverImage: { type: FileSchema },
    desktopBackgroundImage: { type: FileSchema },
    desktopForegroundImage: { type: FileSchema },
    bannerImage: { type: FileSchema },
    ratings: {
      type: Map,
      of: Number,
      required: true,
      default: {}
    },
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

export interface TComicIssueModel {
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
  cardImage?: FileEntry;
  mobileCoverImage?: FileEntry;
  desktopBackgroundImage?: FileEntry;
  desktopForegroundImage?: FileEntry;
  bannerImage?: FileEntry;
  ratings: Record<string, number>;
  issues: TComicIssueModel[];
  status: TModelStatus;
}

export interface ComicIssue
  extends Omit<
    TComicIssueModel,
    'pages' | 'originalImage' | 'coverImage' | 'membership'
  > {
  pages?: string[];
  numPages: number;
  coverImage: string;
  membership: ComicMembership;
}

export interface Comic {
  id: string;
  title: string;
  description: string;
  genres: string[];
  categories: string[];
  authors: string[];
  cardImage?: string;
  mobileCoverImage?: string;
  desktopBackgroundImage?: string;
  desktopForegroundImage?: string;
  bannerImage?: string;
  status: TModelStatus;
  rating: number;
  issues: ComicIssue[];
  userRating?: number;
}

export const ComicModel = mongoose.model('comics', ComicSchema);
