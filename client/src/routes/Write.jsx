import { useUser, useAuth } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Upload from "../components/Upload";
import { useEffect } from "react";

const Write = () => {
  const { getToken } = useAuth();
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState("");
  const [cover, setCover] = useState("");
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    img && setValue((prev) => prev + `<img src="${img.url}" alt="image" />`);
  }, [img]);

  useEffect(() => {
    video &&
      setValue(
        (prev) =>
          prev +
          `<p><iframe class="ql-video" src="${video.url}" title="YouTube video player"></iframe></p>`
      );
  }, [video]);

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (data) => {
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
      img: cover.path || "",
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
        <Upload type="image" setProgress={setProgress} setData={setCover}>
          <button className="w-max p-2 shadow-md text-sm text-gray-500 bg-white font-bold py-2 px-4 rounded-full">
            add a cover image
          </button>
        </Upload>
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
        <div className="flex flex-1">
          <div className="flex flex-col gap-2 mr-2">
            <Upload type="image" setProgress={setProgress} setData={setImg}>
              🏞️
            </Upload>
            <Upload type="video" setProgress={setProgress} setData={setVideo}>
              ▶️
            </Upload>
          </div>
          <ReactQuill
            theme="snow"
            className="flex-1 rounded-xl bg-white shadow-md overflow-hidden"
            value={value}
            onChange={setValue}
            readOnly={0 < progress && progress < 100}
          />
        </div>
        <button
          disabled={mutation.isPending || (0 > progress && progress < 100)}
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
