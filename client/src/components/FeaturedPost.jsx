import Image from "./Image";
import { Link } from "react-router-dom";

const FeaturedPost = ({ post }) => {
  return (
    <>
      {/** First Part */}
      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <Image
            src="featured1.jpeg"
            className="rounded-3lg object-cover"
            w="895"
          />
          <div className="flex items-center gap-4 mt-4">
            <span className="text-sm text-gray-500 font-semibold lg:text-lg">
              01.
            </span>
            <Link className="text-blue-800 text-sm lg:text-lg font-medium">
              Web Design
            </Link>
            <span className="text-gray-500">2 days ago</span>
          </div>
          <Link
            to="/test"
            className="text-xl lg:text-3xl font-semibold lg:font-bold"
          >
            This is a test title! This is a test title!
          </Link>
        </div>
        {/** Other Parts */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          {/** second */}
          <div className="lg:h-1/3 flex justify-between gap-4">
            {/** Image */}
            <div className=" w-1/3 aspect-video">
              <Image
                src="featured2.jpeg"
                className="rounded-3lg object-cover w-full h-full"
                w="298"
              />
            </div>
            {/* details and title */}
            <div className="w-2/3">
              {/** details */}
              <div className="flex flex-col gap-2 lg:text-base mb-4">
                <h1>02.</h1>
                <Link className="text-blut-500">Web Design</Link>
                <span className="text-gray-500">2 days ago</span>
              </div>
              <Link to="/test">
                <h1 className="text-base sm:text-lg md:text-2xl lg:text-xl sl:text-2xl font-medium">
                  This is a test title! This is a test title!
                </h1>
              </Link>
            </div>
          </div>
          {/** third */}
          <div className="lg:h-1/3 flex justify-between gap-4">
            {/** Image */}
            <div className=" w-1/3 aspect-video">
              <Image
                src="featured2.jpeg"
                className="rounded-3lg object-cover w-full h-full"
              />
            </div>
            {/* details and title */}
            <div className="w-2/3">
              {/** details */}
              <div className="flex flex-col gap-2 lg:text-base mb-4">
                <h1>02.</h1>
                <Link className="text-blut-500">Web Design</Link>
                <span className="text-gray-500">2 days ago</span>
              </div>
              <Link to="/test">
                <h1 className="text-base sm:text-lg md:text-2xl lg:text-xl sl:text-2xl font-medium">
                  This is a test title! This is a test title!
                </h1>
              </Link>
            </div>
          </div>
          {/** fourth */}
          <div className="lg:h-1/3 flex justify-between gap-4">
            {/** Image */}
            <Image
              src="featured2.jpeg"
              className="rounded-3lg object-cover w-1/3 aspect-video"
            />
            {/* details and title */}
            <div className="w-2/3">
              {/** details */}
              <div className="flex flex-col gap-2 lg:text-base mb-4">
                <h1>02.</h1>
                <Link className="text-blut-500">Web Design</Link>
                <span className="text-gray-500">2 days ago</span>
              </div>
              <Link to="/test">
                <h1 className="text-base sm:text-lg md:text-2xl lg:text-xl sl:text-2xl font-medium">
                  This is a test title! This is a test title!
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FeaturedPost;
