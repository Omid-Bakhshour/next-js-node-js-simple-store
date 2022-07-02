import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    titleBrief: { type: String, required: true },
    slug: { type: String, required: true, unique: true }, // page link in front-end : jsx-in-react.js
    hashId: { type: String, required: true, unique: true }, //JQV05
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PostCategory",
      required: true,
    },
    briefText: { type: String, required: true },
    text: { type: String, required: true },
    coverImage: { type: String, required: true, unique: true },
    status: { type: Number, default: 1 },
    commentsCount: { type: Number, default: 0 },
    likesCount: { type: Number, default: 0 },
    isBookmarked: { type: Boolean, default: false }, // !!
    likedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    bookmarkedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    isLiked: { type: Boolean, default: false }, // !!
    readingTime: { type: Number, required: true },
    tags: [{ type: String }],
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    related: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    // a Post can have multiple comments, so it should be in a array.
    // all comments info should be kept in this array of this Post.
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "PostComment" }],
  },
  {
    timestamps: true,
  }
);
PostSchema.plugin(mongoosePaginate);

export default mongoose.model("Post", PostSchema);
