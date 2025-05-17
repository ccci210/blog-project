import Post from "../models/post.model.js";

export const getPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(200).send(posts);
};
export const getPost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug });
  res.status(200).send(post);
};
export const createPost = async (req, res) => {
  const clearUserId = req.auth.userId;
  if (!clearUserId) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const user = await User.findOne({ clerkUserId: clearUserId });
  if (!user) {
    return res.status(401).json({
      message: "User not found",
    });
  }

  const newPost = await Post.create({ user: user._id, ...req.body });
  const post = await newPost.save();
  res.status(200).json(post);
};
export const deletePost = async (req, res) => {
  const clearUserId = req.auth.userId;
  if (!clearUserId) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  const user = await User.findOne({ clerkUserId: clearUserId });
  const post = await Post.findByIdAndDelete({
    user: user._id,
    _id: req.params.id,
  });
  res.status(200).json(post);
};
