import { useState } from "react";
import axios from "axios";
import queryString from "query-string";

import PostList from "../../components/PostList";
import CategoryMobile from "../../components/CategoryMobile";
import CategoryDesktop from "../../components/CategoryDesktop";
import SortBar from "../../components/SortBar";
export default function Home({ blogData, postCategories }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <div className="container mx-auto  lg:max-w-screen-xl px-4 py-4 md:py-8  ">
        <CategoryMobile postCategories={postCategories} />

        <div className="grid gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)]  min-h-screen ">
          {/* category desktop */}
          <CategoryDesktop postCategories={postCategories} />
          {/* category mobile */}
          {/* sort desktop */}
          <SortBar />
          {/* blogs */}
          <div className=" md:col-span-9 grid grid-cols-6 gap-8 relative ">
            <PostList blogData={blogData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;

  const { data } = await axios.get(
    `http://localhost:5000/api/posts?${queryString.stringify(query)}`
  );
  const { data: postCategories } = await axios.get(
    "http://localhost:5000/api/post-category"
  );

  return {
    props: {
      blogData: data,
      postCategories,
    },
  };
}
