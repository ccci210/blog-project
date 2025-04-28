import Image from "./Image";
import { Link } from "react-router-dom";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/** Image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src="postImg.jpeg"
          className="rounded-2xl object-cover"
          width="800"
        />
      </div>
      {/** details and title */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          This is a test title! This is a test title!
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span className="">Written by</span>
          <Link className="text-blue-800">Test</Link>
          <span>on</span>
          <Link className="text-blue-800">Web design</Link>
          <span>2 days ago</span>
        </div>
        <p>Random text text infor article article</p>
        <Link to="/test" className="undefline text-blue-800 text-sm">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
