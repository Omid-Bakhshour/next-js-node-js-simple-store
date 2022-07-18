import axios from "axios";

import PostList from "../../components/PostList";
import CategoryMobile from "../../components/CategoryMobile";
import CategoryDesktop from "../../components/CategoryDesktop";
import SortBar from "../../components/SortBar";
export default function Home({ blogData, postCategories }) {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <div className="container mx-auto  lg:max-w-screen-xl px-4 py-4 md:py-8  ">
        <CategoryMobile postCategories={postCategories} />

        <div className="grid gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)]   ">
          {/* category desktop */}
          <CategoryDesktop postCategories={postCategories} />
          {/* sort desktop */}
          <SortBar />
          {/* blogs */}
          <div className=" md:col-span-9 grid grid-cols-6 gap-8 relative ">
            <PostList blogData={blogData?.data?.docs} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { data } = await axios.get("http://localhost:5000/api/posts?limit=6");
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
