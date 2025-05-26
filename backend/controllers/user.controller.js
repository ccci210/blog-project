import User from "../models/user.model.js";

export const getUserSavedPosts = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  const user = await User.findOne({ clerkUserId: clerkUserId });

  res.status(200).json(user.savedPosts);
};

export const savePost = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  const user = await User.findOne({ clerkUserId: clerkUserId });
  const isSaved = user.savedPosts.some((p) => p === req.body.postId);
  if (!isSaved) {
    await User.findByIdAndUpdate(user._id, {
      $push: { savedPosts: req.body.postId },
    });
  } else {
    await User.findByIdAndUpdate(user._id, {
      $pull: { savedPosts: req.body.postId },
    });
  }
  res.status(200).json({
    message: isSaved
      ? "Post removed from saved posts"
      : "Post saved successfully",
  });
};
