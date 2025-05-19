import Post from "../models/post.model.js";
import User from "../models/user.model.js";
import ImageKit from "imagekit";

export const getPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(200).send(posts);
};
export const getPost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug });
  res.status(200).send(post);
};
export const createPost = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const user = await User.findOne({ clerkUserId: clerkUserId });
  if (!user) {
    return res.status(401).json({
      message: "User not found",
    });
  }
  let slug = req.body.title.replace(/ /g, "-").toLowerCase();

  let existingPost = await Post.findOne({ slug: slug });

  let counter = 2;
  while (existingPost) {
    slug = `${slug}-${counter}`;
    existingPost = await Post.findOne({ slug: slug });
    counter++;
  }
  console.log("slug", slug);
  const newPost = await Post.create({ user: user._id, slug, ...req.body });
  const post = await newPost.save();
  res.status(200).json(post);
};
export const deletePost = async (req, res) => {
  const clerkUserId = req.auth.userId;
  if (!clerkUserId) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  const user = await User.findOne({ clerkUserId: clerkUserId });
  const deletedPost = await Post.findByIdAndDelete({
    user: user._id,
    _id: req.params.id,
  });
  if (!deletedPost) {
    return res.status(403).json({
      message: "you can delete only your posts",
    });
  }
  res.status(200).json("Post has been deleted");
};

const imagekit = new ImageKit({
  urlEndpoint: process.env.IK_URL_ENDPOINT,
  publicKey: process.env.IK_PUBLIC_KEY,
  privateKey: process.env.IK_PRIVATE_KEY,
});
console.log(imagekit);
export const uploadAuth = async (req, res) => {
  try {
    const result = imagekit.getAuthenticationParameters();
    console.log("Generated auth params:", result);
    res.json(result); // ✅ sets proper JSON Content-Type
  } catch (error) {
    console.error("Upload auth error:", error);
    res.status(500).json({ error: "Failed to generate auth parameters" });
  }
};
