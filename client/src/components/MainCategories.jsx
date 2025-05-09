import { Link } from "react-router-dom";
import Search from "./Search";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link to="/posts" className="hover:bg-sky-600 p-2 rounded-3xl">
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-sky-600 p-2 rounded-3xl"
        >
          Web design
        </Link>
        <Link
          to="/posts?cat=development"
          className="hover:bg-sky-600 p-2 rounded-3xl"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=databases"
          className="hover:bg-sky-600 p-2 rounded-3xl"
        >
          Databases
        </Link>
        <Link to="/posts?cat=seo" className="hover:bg-sky-600 p-2 rounded-3xl">
          Search Engines
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="hover:bg-sky-600 p-2 rounded-3xl"
        >
          Marketing
        </Link>
      </div>
      <span className="text-xl font-medium>">|</span>
      <Search />
    </div>
  );
};

export default MainCategories;
