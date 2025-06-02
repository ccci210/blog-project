import Image from "./Image";
import { format } from "timeago.js";
import { useUser } from "@clerk/clerk-react";

const Comment = ({ comment }) => {
  const { user } = useUser();
  const isAdmin = user?.publicMetadata?.role === "admin" || false;

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
          <span className="text-red-500 text-sm cursor-pointer">
            Delete comment
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
