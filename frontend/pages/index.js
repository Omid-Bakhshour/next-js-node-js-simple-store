import { HiOutlineChevronDown as DownIcon } from "react-icons/hi";
import { useState } from "react";
import { HiOutlineAdjustments as SortIcon } from "react-icons/hi";

import { BsBookmark as BookmarkEmptyIcon } from "react-icons/bs";
import { BsFillBookmarkFill as BookmarkedIcon } from "react-icons/bs";
import { BiCommentDetail as CommentIcon } from "react-icons/bi";
import { AiOutlineHeart as LikeEmptyIcon } from "react-icons/ai";
import { AiFillHeart as LikeIcon } from "react-icons/ai";
import { BiTimeFive as TimeIcon } from "react-icons/bi";

import Link from "next/link";
import Image from "next/image";
export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto  lg:max-w-screen-xl ">
        <div className="grid gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)]  min-h-screen py-5 px-2">
          {/* category desktop */}

          <div className=" hidden md:block md:row-span-2 md:col-span-3">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <div
                className={`flex items-center justify-between p-6 cursor-pointer bg-purple-100`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="text-lg">دسته بندی مقالات</span>
                <DownIcon
                  className={` ${
                    isOpen ? "rotate-180 " : "rotate-0"
                  } transition-all transform duration-200 stroke-purple-400  w-5 h-5 `}
                />
              </div>

              <div className={`${isOpen ? "block" : "hidden"} py-6`}>
                <Link href="#">
                  <a className="block hover:bg-purple-50 hover:text-purple-700 px-4 py-2 mb-1">
                    همه مقالات
                  </a>
                </Link>

                <Link href="#">
                  <a className="block hover:bg-purple-50 hover:text-purple-700 px-4 py-2 ">
                    ریکت
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className=" hidden md:block md:col-span-9 ">
            {/* sort desktop */}

            <div className="bg-white h-full rounded-3xl dark:bg-slate-800 shadow-lg dark:text-slate-400 px-8 py-2 flex items-center text-[#545f65]">
              <span className="flex items-center">
                <SortIcon className="w-4 h-4 text-[#545f65]" />
                <span className="font-light mr-3 text-sm text-gray-500  dark:text-slate-400">
                  مرتب سازی:
                </span>
              </span>

              <ul className="flex items-center gap-x-4 text-[#545f65] dark:text-slate-400">
                <li className="  block text-sm py-3 px-3 cursor-pointer text-purple-700 font-bold">
                  <span className="relative">
                    جدید ترین
                    <div className="absolute -bottom-5 w-full bg-purple-700 h-[4px] rounded-2xl" />
                  </span>
                </li>

                <li className=" block text-sm py-3 px-3 cursor-pointer text-gray-700 font-bold">
                  <span>پر بازدید ترین</span>
                </li>

                <li className="block py-3 px-3 cursor-pointer text-sm text-gray-700 font-bold">
                  <span>محبوب ترین</span>
                </li>
              </ul>
            </div>
          </div>

          {/* blogs */}
          <div className=" md:col-span-9 grid grid-cols-6 gap-8 relative">
            {[1, 2, 3, 4, 5, 6].map((index) => {
              return (
                <div
                  key={index}
                  className="col-span-6 md:col-span-3 lg:col-span-2 shadow-lg gap-3  bg-white flex flex-col items-center p-3 rounded-3xl 
                   dark:bg-slate-800 ring-1 ring-slate-900/5 "
                >
                  {/* cover image */}
                  <div className="aspect-w-16 aspect-h-9 w-full ">
                    <img
                      src="/images/nextjs.png"
                      className="  w-full h-full  object-center object-cover rounded-2xl"
                    />
                  </div>

                  {/* content */}

                  <div className="bg-gray-100 dark:bg-slate-700 flex  flex-col justify-between flex-1 text-myGray-500 font-bold text-xl p-3 rounded-2xl w-full">
                    {/* title */}
                    <h2 className="mb-5 block font-bold text-slate-800 hover:text-blue-600 dark:text-white dark:hover:text-sky-400">
                      {index !== 2
                        ? "ریداکس چیست ؟ کاربردی ریداکس تانک چیست؟"
                        : "ریکت هوک چیه؟"}
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
                            امید بخشور
                          </span>
                        </div>
                      </div>

                      {/* like comment time */}

                      <div className="flex  items-center text-xs justify-between">
                        <div className="flex items-center gap-x-2">
                          <button
                            className="flex items-center bg-gray-200 transition duration-300 gap-x-1 p-0.5 rounded text-gray-500 dark:bg-slate-500
                         dark:text-slate-300 dark:bg-opacity-30"
                          >
                            <CommentIcon className="h-4 w-4 " />
                            <span>۵</span>
                          </button>
                          <button
                            className="flex items-end bg-red-100 hover:bg-red-500 transition duration-300  gap-x-1 p-0.5 hover:text-white  rounded
                         text-red-500 dark:bg-opacity-10 dark:hover:bg-opacity-100 "
                          >
                            <LikeEmptyIcon className="h-4 w-4" />
                            <span>۲۳</span>
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
                          <span className="text-xs leading-3">۲۳</span>
                          <span>دقیقه</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
