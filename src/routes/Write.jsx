import { useUser } from "@clerk/clerk-react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css"; // import styles

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (!isLoaded && !isSignedIn) {
    return <div className="">You should login!</div>;
  }

  return (
    <div className="flex flex-col">
      <h1>Create a new post</h1>
      <form className="flex flex-col">
        <button>add a cover image</button>
        <input type="text" placeholder="Title" />
        <div className="flex">
          <label htmlFor="content">CHoose </label>
          <select name="cat" id="">
            <option value="text">General</option>
            <option value="image">Web design</option>
            <option value="video">development</option>
            <option value="audio">database</option>
          </select>
        </div>
        <textarea name="desc" placeholder="Description" />
        <ReactQuill theme="snow" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Write;
