import Search from "./Search";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="side-menu px-4 h-max sticky top-8">
      <h1 className="mb-2 text-sm font-medium">Search</h1>
      <Search />
      <h1 className="mt-8 mb-2 text-sm font-medium">Filter</h1>
      <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="cat" className="flex items-center gap-2 text-sm">
          <input
            type="radio"
            name="sort"
            value="newest"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
          />
          Newest
        </label>
        <label htmlFor="" className="flex items-center gap-2 text-sm">
          <input
            type="radio"
            name="sort"
            value="popular"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
          />
          Most popular
        </label>
        <label htmlFor="" className="flex items-center gap-2 text-sm">
          <input
            type="radio"
            name="sort"
            value="trending"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
          />
          Treading
        </label>
        <label htmlFor="" className="flex items-center gap-2 text-sm">
          <input
            type="radio"
            name="sort"
            value="oldest"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
          />
          Oldest
        </label>
      </div>
      <h1 className="mt-8 mb-2 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        <Link to="/posts">All</Link>
        <Link to="/posts?cat=web-design">Web Development</Link>
        <Link to="/posts?cat=development">Web Design</Link>
        <Link to="/posts?cat=databases">Database</Link>
        <Link to="/posts?cat=seo">Search Engines</Link>
        <Link to="/posts?cat=marketing">Marketing</Link>
      </div>
    </div>
  );
};

export default SideMenu;
