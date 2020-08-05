import mongoose from 'mongoose';

const ComicIssueSchema = new mongoose.Schema({
  title: { type: String, required: true },
  pages: { type: [String], required: true, default: [] },
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
    author: { type: [String], required: true },
    coverImage: { type: String, required: true },
    mobileCoverImage: { type: String, required: true },
    desktopCoverImage: { type: String, required: true },
    comicBannerImage: { type: String, required: true },
    ratings: { type: [ComicRatingSchema], required: true, default: [] },
    issues: { type: [ComicIssueSchema], required: true, default: [] }
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
  pages: string[];
  coverImage: string;
  membership: string;
}

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
  ratings: ComicRating[];
  issues: ComicIssue[];
}

interface ComicIssueMeta extends Omit<ComicIssue, 'pages'> {
  numPages: number;
}
export interface Comic extends Omit<TComicModel, 'ratings' | 'issues'> {
  rating: number;
  issues: ComicIssueMeta[];
}

export const ComicModel = mongoose.model('users', ComicSchema);
