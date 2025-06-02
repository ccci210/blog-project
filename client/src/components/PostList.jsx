import PostListItem from "./PostListItem";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";

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
    params: { page: pageParam, limit: 2 },
  });
  return response.data;
};

const PostList = () => {
  const { data, error, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
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
    // <div className="flex flex-col gap-12 mb-8">
    //   {allPosts.map((post) => (
    //     <PostListItem key={post._id} post={post} />
    //   ))}
    // </div>
    <InfiniteScroll
      dataLength={allPosts.length} //This is important field to render the next data
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading more posts...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>All posts loaded!</b>
        </p>
      }
      // below props only if you need pull down functionality
    >
      {allPosts.map((post) => (
        <PostListItem key={post._id} post={post} />
      ))}
    </InfiniteScroll>
  );
};

export default PostList;
