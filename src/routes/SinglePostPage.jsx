import Image from "../components/Image";
import { Link } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/** Details */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Title THItle title title
          </h1>
          <div className="flex gap-8 items-center text-sm">
            <span className="">Written by</span>
            <Link className="text-blue-800">Test</Link>
            <span>on</span>
            <Link className="text-blue-800">Web design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            This is a long text long text long text long text long text long
            text. This is a long text long text long text long text long text
            long text
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image
            src="postImg.jpeg"
            className="rounded-2xl object-cover"
            width="600"
          />
        </div>
      </div>

      {/** Contents */}
      <div className="flex flex-col md:flex-row gap-8">
        {/** Text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            reprehenderit, doloremque, voluptatibus cumque, eveniet quidem
            quibusdam minima iusto deserunt magnam asperiores alias. Repudiandae
            reiciendis, voluptatibus quisquam velit autem cumque maiores.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            reprehenderit, doloremque, voluptatibus cumque, eveniet quidem
            quibusdam minima iusto deserunt magnam asperiores alias. Repudiandae
            reiciendis, voluptatibus quisquam velit autem cumque maiores.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            reprehenderit, doloremque, voluptatibus cumque, eveniet quidem
            quibusdam minima iusto deserunt magnam asperiores alias. Repudiandae
            reiciendis, voluptatibus quisquam velit autem cumque maiores.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            reprehenderit, doloremque, voluptatibus cumque, eveniet quidem
            quibusdam minima iusto deserunt magnam asperiores alias. Repudiandae
            reiciendis, voluptatibus quisquam velit autem cumque maiores.
          </p>
        </div>
        <div className="flex flex-col px-4 h-max sticky top-8 gap-4">
          {/** Author */}
          <div className="flex flex-col gap-4">
            <h2>Author</h2>
            <div className="flex">
              <Image
                src="userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
                width="48"
                height="48"
              />
              <Link>John D</Link>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod</p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          {/** Action */}
          <div className="flex flex-col">
            <h2>Actions</h2>
            <PostMenuActions />
          </div>
          {/** Tags */}
          <div className="flex flex-col pd-4 text-sm gap-2">
            <h2>Categories</h2>
            <div className="flex flex-col">
              <Link className="text-blue-700 underline">All</Link>
              <Link className="text-blue-700 underline">Web Design</Link>
              <Link className="text-blue-700 underline">Development</Link>
              <Link className="text-blue-700 underline">Databases</Link>
              <Link className="text-blue-700 underline">Search Engines</Link>
              <Link className="text-blue-700 underline">Marketing</Link>
            </div>
          </div>
          {/** Search */}
          <h2>Search</h2>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
