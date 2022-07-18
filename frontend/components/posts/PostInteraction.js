import { BsBookmark as BookmarkEmptyIcon } from "react-icons/bs";
import { BsFillBookmarkFill as BookmarkedIcon } from "react-icons/bs";
import { BiCommentDetail as CommentIcon } from "react-icons/bi";
import { AiOutlineHeart as LikeEmptyIcon } from "react-icons/ai";
import { AiFillHeart as LikeIcon } from "react-icons/ai";

function PostInteraction({ post, isSmall }) {
  const iconSize = `${isSmall ? "w-4 h-4" : "w-6 h-6"}`;
  const paddingSize = `${isSmall ? "p-0.5" : "px-3 py-1"}`;

  return (
    <div className={`flex items-center  ${isSmall ? "gap-x-2" : "gap-x-4"}`}>
      <button
        className={`${paddingSize}  flex items-center bg-gray-200 transition duration-300 gap-x-1 rounded text-gray-500 dark:bg-slate-500
        dark:text-slate-300 dark:bg-opacity-30`}
      >
        <CommentIcon className={`${iconSize}`} />
        <span>{post?.commentsCount}</span>
      </button>
      <button
        className={` ${paddingSize}  flex items-center bg-red-100 hover:bg-red-500 transition duration-300  gap-x-1  hover:text-white  rounded
        text-red-500 dark:bg-opacity-10 dark:hover:bg-opacity-100`}
      >
        {post?.isLiked ? (
          <LikeIcon className={`${iconSize}`} />
        ) : (
          <LikeEmptyIcon className={`${iconSize}`} />
        )}
        <span>{post?.likesCount}</span>
      </button>
      <button
        className={`${paddingSize}  flex items-center bg-blue-100 hover:bg-blue-500 transition duration-300 hover:text-white  gap-x-1 
        rounded text-blue-500 dark:bg-opacity-10 dark:hover:bg-opacity-100`}
      >
        {post?.isBookmarked ? (
          <BookmarkedIcon className={`${iconSize}`} />
        ) : (
          <BookmarkEmptyIcon className={`${iconSize}`} />
        )}
      </button>
    </div>
  );
}

export default PostInteraction;
