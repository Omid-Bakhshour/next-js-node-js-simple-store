import express from "express";
import expressAsyncHandler from "express-async-handler";
import Post from "../models/Post.js";
import PostComment from "../models/postComment.js";
import { isAdmin, isAuthWithCookie } from "../utils.js";

const router = express.Router();

router.get(
  "/",
  isAuthWithCookie,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const comments = await PostComment.find().populate("writer", "name");

    res.status(200).send(comments);
  })
);

router.post(
  "/save-comment",
  isAuthWithCookie,
  expressAsyncHandler(async (req, res) => {
    if (!req.body.content) return res.status(400).json({ message: "لطفا متن نظر را وارد کنید" });
    let STATUS = 2;

    const comment = new PostComment({
      writer: req.user._id,
      postId: req.body.postId,
      responseTo: req.body.responseTo || null,
      content: req.body.content,
      status: STATUS,
    });

    comment.save(async (err, doc) => {
      if (err) {
        return res.status(400).json({ message: "خطایی روی داد" });
      }

      if (STATUS === 2) {
        const post = await Post.findById(req.body.postId);
        post.comments.push(doc._id);
        post.commentsCount++;
        await post.save();
      }
      res.status(200).json({
        message: "نظر شما ثبت شد",
      });
    });
  })
);

//   update comment status :
router.put(
  "/:commentId",
  isAuthWithCookie,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const comment = await PostComment.findById(req.params.commentId).populate("writer");

    // reject or confirm comment  : 0 / 2
    comment.status = parseInt(req.body.status);

    comment.save(async (err, doc) => {
      if (err) {
        return res.status(400).json({ message: "خطایی روی داد" });
      }

      if (doc.status === 2) {
        const post = await Post.findById(req.body.postId);
        post.comments.push(doc._id);
        post.commentsCount++;
        await post.save();
      }
    });

    //send email to writer

    if (req.body.status === 2) {
      // writerCommentEmail(comment.writer);

      //send email to reciver
      if (comment.responseTo) {
        const reciver = await Comment.findById(comment.responseTo).populate("writer");
        // reciverCommentEmail(reciver.writer);
      }
    }

    let MESSAGE = "نظر تایید شد";
    if (req.body.status === 0) MESSAGE = "نظر به حالت غیر تایید تغییر یافت";
    if (req.body.status === 1) MESSAGE = "نظر به حالت در انتظار تایید تغییر یافت";
    res.status(200).json({
      message: MESSAGE,
      comments: comment,
    });
  })
);

export default router;
