import React from "react";
import { HiOutlineAdjustments as SortIcon } from "react-icons/hi";

function SortBar() {
  return (
    <div className=" hidden md:block md:col-span-9 ">
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
  );
}

export default SortBar;
