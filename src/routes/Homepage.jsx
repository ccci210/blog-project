import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPost from "../components/FeaturedPost";
import PostList from "../components/PostList";

const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="flex-col gap-4">
        <Link to="/">Home</Link>
        <span>:</span>
        <span className="text-blue-500">Articles</span>
      </div>
      {/* Introduction */}
      <div className="flex item-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl text-gray-700 font-bold">
            Welcome to My Blog
          </h1>
          <p className="text-gray-700 mt-8 text-md md:text-xl">
            This is a simple blog built with React and Tailwind CSS. Why should
            I learn this over and over again
          </p>
        </div>
        <Link to="/write" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            //className="text-lg tracking-widest animate-spin animatedButton"
            className="text-lg tracking-widest"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea •
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>
      {/* Main Categories */}
      <MainCategories />
      {/* Featured Post */}
      <FeaturedPost />
      {/* Post list */}
      <div className="flex flex-col gap-4 mt-8">
        <h1 className="mg-8 text-2xl text-gray-600 font-bold">Latest Posts</h1>
        <PostList />
      </div>
    </div>
  );
};
export default Homepage;
