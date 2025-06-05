import Image from "./Image";
import { format } from "timeago.js";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

const Comment = ({ comment, postId }) => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const isAdmin = user?.publicMetadata?.role === "admin" || false;

  const deletedMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.delete(
        `${import.meta.env.VITE_API_URL}/comments/${comment._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      toast.success("Comment deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
    },
    onError: (error) => {
      console.error("Deletion failed:", error);
    },
  });

  const handleDelete = () => {
    if (!user) {
      return navigate("/login");
    }
    deletedMutation.mutate();
  };

  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        {comment?.user.img && (
          <Image
            src="userImg.jpeg"
            className="w-10 h-10 rounded-full object-cover"
            width="40"
          />
        )}
        <span className="font-medium">
          {comment?.user?.username ?? "default"}
        </span>
        <span className="text-gray-500 text-sm">
          {format(comment.createdAt)}
        </span>
        {user && (user.username === comment.user.username || isAdmin) && (
          <span
            className="text-red-500 text-sm cursor-pointer"
            onClick={handleDelete}
          >
            Delete comment
            {deletedMutation.isPending && "in progress.."}
          </span>
        )}
      </div>
      <div className="mt-4">
        <p>{comment.desc}</p>
      </div>
    </div>
  );
};

export default Comment;
