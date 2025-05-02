import Comment from "./Comment";

const Comments = () => {
  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h2 className="text-xl text-gray-500 underline">Comments</h2>
      <div className="flex items-center justify-between gap-8 w-full">
        <textarea
          placeholder="Write a comment"
          className="w-full p-4 rounded-xl"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Send
        </button>
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};
export default Comments;
