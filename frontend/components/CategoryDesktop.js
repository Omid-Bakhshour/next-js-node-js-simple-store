import { HiOutlineChevronDown as DownIcon } from "react-icons/hi";
import { useState } from "react";

import Link from "next/link";

function CategoryDesktop({ postCategories }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
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
          <Link href="/blogs">
            <a className="block hover:bg-purple-50 hover:text-purple-700 px-4 py-2 mb-1">
              همه مقالات
            </a>
          </Link>

          {postCategories?.data.map((item) => (
            <Link href={`/blogs/${item?.englishTitle}`} key={item._id}>
              <a className="block hover:bg-purple-50 hover:text-purple-700 px-4 py-2 ">
                {item?.title}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryDesktop;
