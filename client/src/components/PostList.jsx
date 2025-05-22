import PostListItem from "./PostListItem";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";

// const fetchPosts = async (pageParam) => {
//   const response = await axios.get(
//     `${import.meta.env.VITE_API_URL}/posts`, // Ensure this URL is correct
//     {
//       params: pageParam,
//     }
//   );
//   console.log(response);
//   return response.data;
// };
const fetchPosts = async (pageParam) => {
  console.log("Page param", pageParam); // Make sure it's a number or valid object
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
    params: { page: pageParam },
  });
  return response.data;
};

const PostList = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["projects"],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 1 : undefined,
  });

  console.log(data);
  if (status === "loading") return <div>Loading...</div>;
  if (status === "error") return <div>Error: {error.message}</div>;
  const allPosts = data?.pages?.flatMap((page) => page.posts) || [];
  console.log(data, allPosts);
  return (
    <div className="flex flex-col gap-12 mb-8">
      {allPosts.map((post) => (
        <PostListItem key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
