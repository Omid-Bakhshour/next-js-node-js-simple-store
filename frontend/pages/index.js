import { HiOutlineChevronDown as DownIcon } from "react-icons/hi";
import { useState } from "react";
import { HiOutlineAdjustments as SortIcon } from "react-icons/hi";

import Link from "next/link";
export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto  lg:max-w-screen-xl ">
        <div className="grid gap-4 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)]  min-h-screen py-5 px-2">
          <div className=" hidden md:block md:row-span-2 md:col-span-3">
            {/* category desktop */}
            <div className="bg-white rounded-3xl overflow-hidden">
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

            <div className="bg-white h-full rounded-3xl dark:bg-slate-800 dark:text-slate-400 px-8 py-2 flex items-center text-[#545f65]">
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
          <div className="bg-blue-200 md:col-span-9">blogs lajjd</div>
        </div>
      </div>
    </div>
  );
}
