function CommentForm({ comment, setComment }) {
  return (
    <form>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="focus:ring-violet-600 p-4 rounded my-4 w-full border-none ring-2 ring-slate-300 shadow-sm focus:outline-none
               focus:ring-2 dark:focus-within:ring-blue-500 dark:text-slate-100 dark:placeholder:text-slate-500 dark:ring-2
                dark:ring-slate-500 dark:focus:ring-vio-400 dark:bg-transparent"
        placeholder="نظرت رو برام بنویس ..."
      ></textarea>
      <button className=" px-6 rounded-lg bg-gradient-to-l text-white mt-4 mx-auto py-4 w-full sm:w-56 bg-violet-600">
        ارسال نظر
      </button>
    </form>
  );
}

export default CommentForm;
