import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";
import { useState } from "react";

const PostListPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-12 mb-8">
      <h1 className="mb-8 text-2xl">Development Blog</h1>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-blue-800 text-sm text-white px-4 py-2 rounded-2xl mb-4 w-max md:hidden"
      >
        {open ? "Close" : "Filter or search"}
      </button>
      <div className="flex flex-col-reverse justify-between gap-8 md:flex-row">
        <div className="">
          <PostList />
        </div>
        <div>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
