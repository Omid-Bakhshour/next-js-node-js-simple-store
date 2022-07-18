import React, { useState } from "react";
import toLocalDate from "../../utils/tolocalDate";
import CommentForm from "./CommentForm";

function SingleComment({ comment }) {
  const [onReply, setOnReply] = useState(false);
  const [commentVal, setCommentVal] = useState("");

  return (
    <div className="border rounded-xl border-gray-200 dark:border-slate-600/50 dark:bg-slate-800 p-4 flex flex-col my-5">
      <div className="flex items-center justify-start">
        <div className="MuiAvatar-root MuiAvatar-circular">
          <img
            alt="صاحب محمدی"
            src="/images/sample.png"
            className="w-8 h-8  rounded-full"
          />
        </div>
        <div className="flex flex-col justify-between mr-4">
          <span className="block dark:text-slate-500">
            {comment?.writer?.name}
            <span className="text-xs text-gray-500 mr-1 dark:text-slate-600">
              (مدیر سایت)
            </span>
          </span>
          <span className="block text-xs text-gray-500 mt-2 dark:text-slate-500">
            {toLocalDate(comment?.createdAt)}
          </span>
        </div>
      </div>

      <div className="mt-4 dark:text-slate-300">{comment?.content}</div>
      <div
        className="text-sm text-violet-600 my-4 p-4 cursor-pointer"
        onClick={() => setOnReply(!onReply)}
      >
        {onReply ? "بیخیال" : "پاسخ به"}
      </div>

      {onReply && (
        <div className="mt-2">
          <span class="text-xs text-gray-500 dark:text-slate-400">
            <span>در حال پاسخ به</span>
            <span> {comment?.writer?.name}</span>
          </span>{" "}
          <CommentForm comment={commentVal} setComment={setCommentVal} />
        </div>
      )}
    </div>
  );
}

export default SingleComment;
