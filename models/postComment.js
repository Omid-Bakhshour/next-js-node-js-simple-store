import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postCommentSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // each comment can only relates to one blog, so it's not in array
    postId: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    responseTo: {
      type: Schema.Types.ObjectId,
      ref: "PostComment",
    },
    content: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      default: 2,
    },
  },
  { timestamps: true }
);

export default mongoose.model("PostComment", postCommentSchema);
