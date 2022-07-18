import React, { useState } from "react";
import CommentForm from "./CommentForm";
import ReplyComment from "./ReplyComment";
import SingleComment from "./SingleComment";

function PostComments({ post }) {
  const [comment, setComment] = useState("");
  return (
    <div>
      {post?.comments.map((comment, index) => {
        return (
          !comment.responseTo &&
          comment.status === 2 && (
            <React.Fragment key={comment._id}>
              <SingleComment comment={comment} />
              <ReplyComment
                comments={post?.comments}
                parentCommentId={comment?._id}
              />
            </React.Fragment>
          )
        );
      })}
      <div className="mt-8">
        <span className="dark:text-slate-200">ارسال دیدگاه جدید</span>

        <CommentForm comment={comment} setComment={setComment} />
      </div>
    </div>
  );
}

export default PostComments;
