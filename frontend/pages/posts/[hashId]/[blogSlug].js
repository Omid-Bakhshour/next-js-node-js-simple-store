import axios from "axios";
import Link from "next/link";
import { AiOutlineLink as LinkIcon } from "react-icons/ai";
import { BsBookmarkPlus as BookmarkIcon } from "react-icons/bs";

import { BsBookmark as BookmarkEmptyIcon } from "react-icons/bs";
import { BsFillBookmarkFill as BookmarkedIcon } from "react-icons/bs";
import { BiCommentDetail as CommentIcon } from "react-icons/bi";
import { AiOutlineHeart as LikeEmptyIcon } from "react-icons/ai";
import { AiFillHeart as LikeIcon } from "react-icons/ai";
import { BiTimeFive as TimeIcon } from "react-icons/bi";

import { BsLinkedin as LinkedinIcon } from "react-icons/bs";
import { BsTwitter as TwitterIcon } from "react-icons/bs";
import { FaTelegramPlane as TelegramIcon } from "react-icons/fa";
import { MdOutlineContentCopy as CopyIcon } from "react-icons/md";
import PostInteraction from "../../../components/PostInteraction";

function blogDetail({ post }) {
  return (
    <div className="  h-full  min-h-screen py-6 px-4 lg:px-0 bg-gray-50 relative  dark:text-slate-400  dark:bg-slate-900 ">
      <div className="flex">
        {/* article */}

        <main className="mx-auto w-full max-w-screen-2xl">
          <header className="flex flex-col md:flex-row gap-y-5 bg-red--100 md:justify-between md:items-start mb-12 mt-5 max-w-screen-md mx-auto">
            {/* author */}
            <div className="flex items-stretch">
              <img
                src={`/images/vuejs.png`}
                className="w-14 h-14 md:w-20 md:h-20 rounded-full ring-2 ring-white dark:ring-white/90"
              />
              <div className="flex flex-col mr-4 justify-between">
                <div className="flex justify-between items-center">
                  <span className="font-extrabold text-base">
                    {post?.data?.author?.name}
                  </span>
                  <Link href={"#"}>
                    <a
                      className="bg-white border border-blue-500 text-xs text-blue-500 px-3 py-1 mr-1 rounded-full transition-all
                 duration-300 hover:bg-blue-500 hover:text-white dark:bg-opacity-10 dark:bg-slate-500 dark:hover:bg-opacity-100 dark:hover:bg-blue-500"
                    >
                      {post?.data?.category?.title}
                    </a>
                  </Link>
                </div>

                <span className="font-normal text-xs hidden md:block">
                  {post?.data?.author?.biography}
                </span>
                <div className="font-normal text-myGray-400 text-sm dark:text-slate-500">
                  <div class="font-normal text-myGray-400 text-sm dark:text-slate-500">
                    <span>
                      {new Date(post?.data?.createdAt).toLocaleDateString(
                        "fa-IR"
                      )}
                    </span>
                    <span class="mx-1"> •</span>
                    <span>
                      <span> خواندن</span>
                      <span className="mx-1">{post?.data?.readingTime}</span>
                      <span>دقیقه </span>
                    </span>
                  </div>{" "}
                </div>
              </div>
            </div>

            {/* button */}
            <div className="flex">
              <button>
                <LinkIcon className="h-6 w-6 hover:text-black text-gray-500 cursor-pointer dark:text-slate-400" />
              </button>
              <button
                className="mr-4 border border-gray-200 text-gray-500 hover:text-gray-800 dark:text-slate-400
           dark:hover:text-slate-200 dark:border-slate-400 rounded-full px-3 py-1 flex items-center "
              >
                <span className="ml-1 text-xs ">ذخیره</span>
                <BookmarkIcon />
              </button>
            </div>
          </header>

          <section className="flex">
            <article
              className="mx-auto max-w-screen-md  prose prose-headings:front-extrabold md:prose-h2:text-2xl prose-h2:text-xl
             prose-h2:mt-8 prose-h2:mb-5 prose-p:leading-8 md:prose-p:leading-10 prose-p:text-md prose-p:text-justify md:prose-p:text-lg dark:prose-invert dark:prose-p:text-slate-400 "
            >
              <h1 className="text-xl md:text-3xl mb-8">{post?.data.title}</h1>
              <h2>عنوان تستی</h2>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
              <h2> دومی عنوان تستی</h2>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </article>
          </section>
        </main>

        {/* writer comment like */}

        <aside className="opacity-100 w-[220px] items-center transition-all duration-300 hidden md:flex">
          <div className="flex flex-col sticky top-60">
            <div>
              <div className="font-bold text-base mb-3">
                {post?.data?.author?.name}
              </div>
            </div>
            <div className="font-normal text-xs text-gray-700 hidden md:block dark:text-slate-500">
              {post?.data?.author?.biography}
            </div>

            <hr className="my-4 dark:bg-slate-700 bg-gray-500 h-0.5 border-0" />
            <div className="flex items-center gap-x-5 text-gray-500 dark:text-slate-400">
              <button className="flex items-center   transition duration-300 px-1 py-0.5 rounded ">
                <CommentIcon className="h-6 w-6 ml-1" />
                <span>{post?.data?.commentsCount}</span>
              </button>

              <div className="flex items-center   transition duration-300 px-1 py-0.5 rounded ">
                <button>
                  <LikeEmptyIcon className="h-6 w-6 ml-1" />
                </button>
                <span>{post?.data?.likesCount}</span>
              </div>

              <button className="flex items-end transition duration-300 px-1 py-0.5 rounded">
                <BookmarkEmptyIcon className="h-5 w-5  " />
              </button>
            </div>
          </div>
        </aside>
      </div>

      <section className="mt-20 w-full mb-16 max-w-screen-xl mx-auto px-2 lg:px-0">
        <ul className="flex items-center gap-4 flex-wrap mb-7 ">
          {["next js", "فرانت اند", "جاوا اسکریپت", "ریکت"].map(
            (tag, index) => (
              <li className="block mb-3" key={index}>
                <Link href="#">
                  <a
                    className="bg-gray-100 border border-gray-300 hover:bg-gray-300 transition-all duration-300 rounded-full py-1.5 px-3
               text-gray-500 dark:border-slate-700 dark:text-slate-400 dark:bg-slate-500 dark:bg-opacity-30"
                  >
                    {tag}
                  </a>
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="flex  justify-between flex-wrap gap-y-5 mb-6 max-w-screen-lg">
          <PostInteraction post={post?.data} />

          {/* share buttons and copy link */}
          <div className="flex items-center justify-between md:gap-x-6 w-full md:w-auto">
            {/* share */}
            <div className="flex  items-center md:gap-x-4 gap-x-3 w-full ">
              <LinkedinIcon className="transition-all fill-gray-400 hover:fill-gray-600 cursor-pointer w-6 h-6" />
              <TwitterIcon className="transition-all fill-gray-400 hover:fill-gray-600 cursor-pointer w-6 h-6" />
              <TelegramIcon className="transition-all fill-gray-400 hover:fill-gray-600 cursor-pointer w-6 h-6" />
            </div>

            {/* copy link */}
            <div className="relative">
              <div
                className="cursor-pointer rounded-full px-4 py-2 flex gap-x-2 items-center border w-[110px]
                 border-gray-400 dark:border-slate-500 dark:text-slate-400 text-xs text-gray-700"
              >
                <span>کپی لینک</span>
                <CopyIcon className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default blogDetail;

export async function getServerSideProps(ctx) {
  const { query } = ctx;

  const { data: post } = await axios.get(
    `http://localhost:5000/api/posts/${query?.blogSlug}`
  );
  return {
    props: {
      post,
    },
  };
}
