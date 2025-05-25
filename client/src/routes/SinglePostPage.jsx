import Image from "../components/Image";
import { Link } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "timeago.js";

const fetchPost = async (slug) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
  return res.data;
};

const SinglePostPage = () => {
  const { slug } = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
  });
  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data found</div>;

  return (
    <div className="flex flex-col gap-8">
      {/** Details */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            {data.title}
          </h1>
          <div className="flex gap-8 items-center text-sm">
            <span className="">Written by</span>
            <Link className="text-blue-800">
              {data.user?.username ?? "default"}
            </Link>
            <span>on</span>
            <Link className="text-blue-800">{data.category}</Link>
            <span>{format(data.createdAt)}</span>
          </div>
          <p className="text-gray-500 font-medium">{data.desc}</p>
        </div>
        <div className="hidden lg:block w-2/5">
          {data.img && (
            <Image
              src={"userImg.jpeg"}
              className="rounded-2xl object-cover"
              width="600"
            />
          )}
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
              {data.user?.img && (
                <Image
                  src={"userImg.jpeg"}
                  className="w-12 h-12 rounded-full object-cover"
                  width="48"
                  height="48"
                />
              )}
              <Link>{data.user?.username}</Link>
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
              <Link className="text-gray-700 underline">All</Link>
              <Link className="text-gray-700 underline">Web Design</Link>
              <Link className="text-gray-700 underline">Development</Link>
              <Link className="text-gray-700 underline">Databases</Link>
              <Link className="text-gray-700 underline">Search Engines</Link>
              <Link className="text-gray-700 underline">Marketing</Link>
            </div>
          </div>
          {/** Search */}
          <h2>Search</h2>
          <Search />
        </div>
      </div>
      <Comments postId={data._id} />
    </div>
  );
};

export default SinglePostPage;
