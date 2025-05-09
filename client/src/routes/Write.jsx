import { useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (!isLoaded && !isSignedIn) {
    return <div className="">You should login!</div>;
  }

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] gap-6s">
      <h1 className="text-cl font-light">Create a new post</h1>
      <form className="flex flex-col gap-6 flex-1 mb-10">
        <button className="w-max p-2 shadow-md text-sm text-gray-500 bg-white font-bold py-2 px-4 rounded-full">
          add a cover image
        </button>
        <input
          type="text"
          placeholder="Title"
          className="text-4xl font-semibold bg-transparent outline-none"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="content" className="text-sm">
            Choose a category
          </label>
          <select name="cat" id="" className="p-2 rounded-xl shadow-sm">
            <option value="text">General</option>
            <option value="image">Web design</option>
            <option value="video">development</option>
            <option value="audio">database</option>
          </select>
        </div>
        <textarea
          name="desc"
          placeholder="Description"
          className="p-2 rounded-xl shadow-sm"
        />
        <ReactQuill
          theme="snow"
          className="flex-1 rounded-xl bg-white shadow-md overflow-hidden"
        />
        <button className="w-max p-2 shadow-md text-sm text-white bg-blue-500 font-bold py-2 px-4 rounded-full">
          Send
        </button>
      </form>
    </div>
  );
};

export default Write;
