import React from "react";
import Link from "next/link";

function CategoryMobile({ postCategories }) {
  return (
    <div className="flex md:hidden gap-x-4 overflow-x-auto pb-5">
      {postCategories?.data.map((item) => (
        <>
          <Link href={`/blogs/${item?.englishTitle}`} key={item._id}>
            <a className="block border border-gray-200 text-gray-400 rounded-3xl  px-3 py-1 whitespace-nowrap bg-white ">
              {item?.title}
            </a>
          </Link>
        </>
      ))}
    </div>
  );
}

export default CategoryMobile;
