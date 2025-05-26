import express from "express";
import { getUserSavedPosts, savePost } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/anothertest", (req, res) => {
  res.status(200).send("user: it works again");
});

router.get("/saved", getUserSavedPosts);
router.patch("/save", savePost);

export default router;
