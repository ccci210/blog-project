import { useUser, useAuth } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Write = () => {
  const { getToken } = useAuth();
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      console.log(newPost);
      const token = await getToken();
      console.log(token, `${import.meta.env.VITE_API_URL}/posts`);
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (data) => {
      console.log("Mutation succeeded:", data);
      toast.success("Post created successfully!");
      navigate(`/${data.data.slug}`);
    },
    onError: (error) => {
      console.error("Mutation failed:", error);
    },
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (!isLoaded && !isSignedIn) {
    return <div className="">You should login!</div>;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      title: formData.get("title"),
      desc: formData.get("desc"),
      category: formData.get("category"),
      content: value,
    };
    mutation.mutate(data);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] gap-6s">
      <h1 className="text-cl font-light">Create a new post</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 flex-1 mb-10"
      >
        <button className="w-max p-2 shadow-md text-sm text-gray-500 bg-white font-bold py-2 px-4 rounded-full">
          add a cover image
        </button>
        <input
          type="text"
          placeholder="Title"
          className="text-4xl font-semibold bg-transparent outline-none"
          name="title"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="content" className="text-sm">
            Choose a category
          </label>
          <select name="category" id="" className="p-2 rounded-xl shadow-sm">
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
        <div className="flex">
          <div className="flex flex-col gap-2 mr-2">
            <div className="cursor-pointer">🏞️</div>
            <div className="cursor-pointer">▶️</div>
          </div>
          <ReactQuill
            theme="snow"
            className="flex-1 rounded-xl bg-white shadow-md overflow-hidden"
            value={value}
            onChange={setValue}
          />
        </div>
        <button
          disabled={mutation.isPending}
          className="w-max p-2 shadow-md text-sm text-white bg-blue-500 font-bold py-2 px-4 rounded-full disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Loading..." : "Send"}
        </button>
        {mutation.isError && (
          <div className="text-red-500">
            An error occurred: {mutation.error.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default Write;
