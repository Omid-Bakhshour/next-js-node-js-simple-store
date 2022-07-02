import express from "express";
import asyncHandler from "express-async-handler";
import { isAdmin, isAuthWithCookie } from "../utils.js";
import PostCategory from "../models/PostCategory.js";

const router = express.Router();

router.get(
  "/seed",
  isAuthWithCookie,
  isAdmin,
  asyncHandler(async (req, res) => {
    const createdPostCategories = await PostCategory.insertMany();
    return res.send({ createdPostCategories });
  })
);

router.post(
  "/create",
  asyncHandler(async (req, res) => {
    const category = new PostCategory({
      title: req.body.title,
      englishTitle: req.body.englishTitle,
      description: req.body.description,
      color: req.body.color,
    });

    await category.save();

    const allCategories = await PostCategory.find();
    return res.status(200).json({
      message: "دسته بندی جدید با موفقیت ایجاد شد",
      data: allCategories,
    });
  })
);

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const postCategories = await PostCategory.find({});
    return res.status(200).json({ data: postCategories });
  })
);

export default router;
