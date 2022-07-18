import React from "react";
import SingleComment from "./SingleComment";

function ReplyComment({ comments, parentCommentId }) {
  return comments?.map((comment, index) => {
    return (
      parentCommentId === comment.responseTo && (
        <React.Fragment key={comment?._id}>
          <div className="mr-3">
            <SingleComment comment={comment} />
            <ReplyComment comments={comments} parentCommentId={comment?._id} />
          </div>
        </React.Fragment>
      )
    );
  });
}

export default ReplyComment;
