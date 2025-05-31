import Comment from "./Comment";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useAuth, useUser } from "@clerk/clerk-react";

const fetchComments = async (postId) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/comments/${postId}`
  );
  console.log("res", res);
  return res.data;
};

const Comments = ({ postId }) => {
  const { getToken } = useAuth();
  const { user } = useUser();

  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newComment) => {
      const token = await getToken();
      return axios.post(
        `${import.meta.env.VITE_API_URL}/comments/${postId}`,
        newComment,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
    },
    onError: (error) => {
      toast.error(error.response.data);
      console.error("Mutation failed:", error);
    },
  });

  // if (isPending) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;
  // if (!data) return <div>Comments data found</div>;
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      desc: formData.get("desc"),
    };
    console.log(data);
    mutation.mutate(data);
  };
  console.log("Comments data", data);
  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h2 className="text-xl text-gray-500 underline">Comments</h2>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between gap-8 w-full"
      >
        <textarea
          name="desc"
          placeholder="Write a comment"
          className="w-full p-4 rounded-xl"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Send
        </button>
      </form>
      {isPending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          {mutation.isPending && (
            <Comment
              comment={{
                desc: `${mutation.variables.desc} (Sending...)`,
                user: {
                  username: user?.username || "Anonymous",
                  img: user?.imageUrl || "userImg.jpeg",
                },
                createdAt: new Date(),
              }}
              postId={postId}
            />
          )}
          {data?.map((comment) => (
            <Comment key={comment._id} comment={comment} postId={postId} />
          ))}
        </>
      )}
    </div>
  );
};
export default Comments;
