import mongoose from "mongoose";

const postCategorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, uniqure: true },
    englishTitle: { type: String, required: true, uniqure: true },
    description: { type: String, required: true },
    color: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("PostCategory", postCategorySchema);
