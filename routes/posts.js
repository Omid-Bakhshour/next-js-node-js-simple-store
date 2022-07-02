import express from "express";
import asyncHandler from "express-async-handler";
import { isAdmin, isAuthWithCookie } from "../utils.js";
import Post from "../models/Post.js";
import slugify from "slugify";
import shortId from "shortid";
import PostCategory from "../models/PostCategory.js";
import cookie from "cookie";
import User from "../models/user.js";

function decideMiddleware(req, res, next) {
  const parsedCookie = cookie.parse(req.headers.cookie || "");
  // console.log({ parsedCookie });
  if (parsedCookie.userToken) {
    return isAuthWithCookie(req, res, next);
  }
  // skip this middleware
  next();
}

function setSort(sort) {
  const sortObj = {};
  switch (sort) {
    case "newest": {
      sortObj.createdAt = -1;
      return sortObj;
    }
    case "popular": {
      sortObj.likesCount = -1;
      return sortObj;
    }
    case "most": {
      sortObj.readingTime = -1;
      return sortObj;
    }
    default: {
      sortObj.createdAt = -1;
      return sortObj;
    }
  }
}

const router = express.Router();

router.get(
  "/seed",
  isAuthWithCookie,
  isAdmin,
  asyncHandler(async (req, res) => {
    const createdPosts = await Post.insertMany();
    return res.status(200).json({ createdPosts });
  })
);

// add new post
router.post(
  "/create",
  isAuthWithCookie,
  asyncHandler(async (req, res) => {
    console.log(req.user);
    const post = new Post({
      title: req.body.title,
      titleBrief: req.body.titleBrief,
      slug: slugify(req.body.slug),
      hashId: shortId.generate(),
      briefText: req.body.briefText,
      category: req.body.category,
      text: req.body.text,
      coverImage: req.body.coverImage,
      readingTime: req.body.readingTime,
      // tags: req.body.tags,
      author: req.user._id,
    });

    await post.save();

    const allPosts = await Post.find();
    return res.status(200).json({
      message: "پست جدید با موفقیت ساخته شد",
      data: allPosts,
    });
  })
);

// like post :
router.put(
  "/like/:blogId",
  isAuthWithCookie,
  asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.blogId);
    const user = await User.findById(req.user._id);
    if (post.likedUsers.includes(req.user._id)) {
      post.likedUsers.pull(req.user._id);
      post.likesCount = post.likesCount - 1;
      user.likedPosts.pull(req.params.blogId);
      await user.save();
      await post.save();

      return res.status(200).json({ message: "Unliked!" });
    } else {
      post.likedUsers.push(req.user._id);
      post.likesCount = post.likesCount + 1;

      user.likedPosts.push(req.params.blogId);
      await user.save();
      await post.save();
      return res.status(200).json({ message: "liked successfully" });
    }
  })
);

// bookmark put :
router.put(
  "/bookmark/:blogId",
  isAuthWithCookie,
  asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.blogId);
    const user = await User.findById(req.user._id);
    if (post.bookmarkedUsers.includes(req.user._id)) {
      post.bookmarkedUsers.pull(req.user._id);
      user.bookmarkedPosts.pull(req.params.blogId);
      await user.save();
      await post.save();
      return res.status(200).json({ message: "Unbookmared !" });
    } else {
      post.bookmarkedUsers.push(req.user._id);
      user.bookmarkedPosts.push(req.params.blogId);
      await user.save();
      await post.save();
      return res.status(200).json({ message: "bookmarked successfully" });
    }
  })
);

// find bookmarked post for a user
router.get(
  "/bookmarks",
  isAuthWithCookie,
  asyncHandler(async (req, res) => {
    const user = await User.findOne({ _id: req.user._id });
    if (!user) return res.status(401).json({ message: "لطفا لاگین کنید" });

    const page = req.query.page || 1;
    const limit = req.query.limit || 3;
    // post => bookmarkedUsers
    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      populate: {
        path: "author category",
        select: "name biography title englishTitle",
      },
    };

    Post.paginate({ _id: { $in: user.bookmarkedPosts } }, options)
      .then((response) => {
        const newDocs = response.docs.map((post) => {
          if (post.likedUsers.includes(req.user._id)) {
            post.isLiked = true;
          }
          if (post.bookmarkedUsers.includes(req.user._id)) {
            post.isBookmarked = true;
          }
          post = post.toObject();
          delete post.likedUsers;
          delete post.bookmarkedUsers;
          return post;
        });

        response.docs = newDocs;
        return res.status(200).json({ data: response });
      })
      .catch((error) => {
        console.log(error);
        return res.status(400).json({ message: error });
      });
  })
);

//  find one post by slug
router.get("/:slug", decideMiddleware, async (req, res) => {
  try {
    let post = await Post.findOne({ slug: req.params.slug })
      .populate({ path: "author", select: "name biography" })
      .populate({ path: "category", select: "title englishTitle" })
      .populate({
        path: "comments",
        model: "PostComment",
        populate: [
          {
            // deeper
            path: "writer",
            model: "User",
            select: "name",
          },
        ],
      })
      .populate({
        path: "related",
        model: "Post",
        populate: [
          {
            // deeper
            path: "author",
            model: "User",
            select: "name biography",
          },
          {
            path: "category",
            model: "PostCategory",
            select: "title englishTitle",
          },
        ],
      })
      .sort({ "comments.createdAt": -1 });

    if (!post) {
      return res.status(404).json({ message: "پستی با این مشخصات پیدا نشد" });
    }

    if (req.user) {
      if (post.likedUsers.includes(req.user._id)) {
        post.isLiked = true;
      }

      if (post.bookmarkedUsers.includes(req.user._id)) {
        post.isBookmarked = true;
      }

      for (let p of post.related) {
        if (p.likedUsers.includes(req.user._id)) {
          p.isLiked = true;
        }
        if (p.bookmarkedUsers.includes(req.user._id)) {
          p.isBookmarked = true;
        }
      }
    }
    post = post.toObject();
    delete post.likedUsers;
    delete post.bookmarkedUsers;
    return res.status(200).json({ data: post });
    // const seo = await productMeta.findOne({ productId: product._id });
  } catch (error) {
    console.log({ error });
    return res.status(404).json({ error });
  }
});

// query for posts based on query parameters
router.get("/", decideMiddleware, async (req, res) => {
  const category = req.query.categoryId;
  const query = {};

  if (category) {
    query.category = category;
  }

  const { categorySlug } = req.query;

  if (categorySlug) {
    const { _id } = await PostCategory.findOne({ englishTitle: categorySlug });
    query.category = _id;
  }

  const page = req.query.page || 1;
  const limit = req.query.limit || 3;

  const options = {
    page: parseInt(page),
    limit: parseInt(limit),
    sort: {},
    populate: {
      path: "author category",
      select: "name title biography englishTitle",
    },
  };

  options.sort = setSort(req.query.sort);

  Post.paginate(query, options)
    .then((response) => {
      const newDocs = response.docs.map((post) => {
        if (!req.user) {
          post = post.toObject();
          delete post.likedUsers;
          delete post.bookmarkedUsers;
          return post;
        }
        if (post.likedUsers.includes(req.user._id)) {
          post.isLiked = true;
        }
        if (post.bookmarkedUsers.includes(req.user._id)) {
          post.isBookmarked = true;
        }
        post = post.toObject();
        delete post.likedUsers;
        delete post.bookmarkedUsers;
        return post;
      });

      response.docs = newDocs;
      return res.status(200).json({ data: response });
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({ message: error });
    });
});

export default router;
