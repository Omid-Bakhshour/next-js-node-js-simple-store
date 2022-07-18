import React from "react";
import { BiTimeFive as TimeIcon } from "react-icons/bi";
import Link from "next/link";
import PostInteraction from "./PostInteraction";

function PostList({ blogData, related }) {
  return blogData?.map((item, index) => {
    return (
      <div
        key={index}
        className="col-span-6 md:col-span-3 lg:col-span-2 shadow-lg gap-3  bg-white flex flex-col items-center p-3 rounded-3xl 
             dark:bg-slate-800 ring-1 ring-slate-900/5 md:max-h-[400px] lg:max-h-[380px]  "
      >
        {/* cover image */}
        <div className="aspect-w-16 aspect-h-9 w-full ">
          <Link href={`posts/${item?.hashId}/${item?.slug}`}>
            <a>
              <img
                src={item?.coverImage}
                className="  w-full h-full  object-center object-cover rounded-2xl"
              />
            </a>
          </Link>
        </div>

        {/* content */}

        <div className="bg-gray-100 dark:bg-slate-700 flex  flex-col justify-between flex-1 text-myGray-500 font-bold text-xl p-3 rounded-2xl w-full">
          {/* title */}
          <Link href={`posts/${item?.hashId}/${item?.slug}`}>
            <a>
              <h2 className="mb-5 block font-bold text-slate-800 hover:text-blue-600 dark:text-white dark:hover:text-sky-400">
                {item?.title}
              </h2>
            </a>
          </Link>

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
              <PostInteraction post={item} isSmall />

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
