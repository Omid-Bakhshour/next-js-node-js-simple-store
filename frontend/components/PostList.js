import React from "react";
import { BsBookmark as BookmarkEmptyIcon } from "react-icons/bs";
import { BsFillBookmarkFill as BookmarkedIcon } from "react-icons/bs";
import { BiCommentDetail as CommentIcon } from "react-icons/bi";
import { AiOutlineHeart as LikeEmptyIcon } from "react-icons/ai";
import { AiFillHeart as LikeIcon } from "react-icons/ai";
import { BiTimeFive as TimeIcon } from "react-icons/bi";
import Link from "next/link";

function PostList({ blogData }) {
  return blogData?.data?.docs?.map((item, index) => {
    return (
      <div
        key={index}
        className="col-span-6 md:col-span-3 lg:col-span-2 shadow-lg gap-3  bg-white flex flex-col items-center p-3 rounded-3xl 
             dark:bg-slate-800 ring-1 ring-slate-900/5 md:max-h-[350px] "
      >
        {/* cover image */}
        <div className="aspect-w-16 aspect-h-9 w-full ">
          <img
            src={item?.coverImage}
            className="  w-full h-full  object-center object-cover rounded-2xl"
          />
        </div>

        {/* content */}

        <div className="bg-gray-100 dark:bg-slate-700 flex  flex-col justify-between flex-1 text-myGray-500 font-bold text-xl p-3 rounded-2xl w-full">
          {/* title */}
          <h2 className="mb-5 block font-bold text-slate-800 hover:text-blue-600 dark:text-white dark:hover:text-sky-400">
            {item?.title}
          </h2>

          <div className="w-full flex flex-col">
            {/* writer and tag */}

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img
                  className="w-6 h-6 object-cover rounded-full border-2 border-white ml-2 ring ring-white/80"
                  src="/images/nextjs.png"
                />
                <span className="text-xs font-semibold text-gray-400 dark:text-slate-400">
                  {item?.author?.name}
                </span>
              </div>

              <Link
                href={`/blogs/${item?.category?.englishTitle}`}
                key={item._id}
              >
                <a
                  className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-xl transition duration-200
               hover:bg-blue-700 hover:text-white dark:bg-slate-600 dark:bg-opacity-60 dark:hover:bg-opacity-100 dark:hover:text-sky-500 dark:text-slate-200"
                >
                  <span>{item?.category?.englishTitle}</span>
                </a>
              </Link>
            </div>

            {/* like comment time */}

            <div className="flex  items-center text-xs justify-between">
              <div className="flex items-center gap-x-2">
                <button
                  className="flex items-center bg-gray-200 transition duration-300 gap-x-1 p-0.5 rounded text-gray-500 dark:bg-slate-500
                   dark:text-slate-300 dark:bg-opacity-30"
                >
                  <CommentIcon className="h-4 w-4 " />
                  <span>{item?.commentsCount}</span>
                </button>
                <button
                  className="flex items-end bg-red-100 hover:bg-red-500 transition duration-300  gap-x-1 p-0.5 hover:text-white  rounded
                   text-red-500 dark:bg-opacity-10 dark:hover:bg-opacity-100 "
                >
                  <LikeEmptyIcon className="h-4 w-4" />
                  <span>{item?.likesCount}</span>
                </button>
                <button
                  className="flex items-center bg-blue-100 hover:bg-blue-500 transition duration-300 hover:text-white  gap-x-1 p-0.5
                   rounded text-blue-500 dark:bg-opacity-10 dark:hover:bg-opacity-100 "
                >
                  <BookmarkEmptyIcon className="h-4 w-4  " />
                </button>
              </div>

              <div className="flex items-center gap-x-1  font-bold text-gray-400 text-[10px]">
                <TimeIcon />

                <span>زمان مطالعه:</span>
                <span className="text-xs leading-3">{item?.readingTime}</span>
                <span>دقیقه</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default PostList;
