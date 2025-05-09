import express from "express";

const router = express.Router();

router.get("/anothertest", (req, res) => {
  res.status(200).send("post: it works again");
});

export default router;
