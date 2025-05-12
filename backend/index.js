import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import { connectDB } from "./lib/connectDB.js";
import webhookRouter from "./routes/webhook.route.js";

const app = express();
app.use("/webhooks", webhookRouter);
app.use(express.json());

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    status: "error",
    message: error.message || "Internal Server Error",
    stack: error.stack,
  });
});

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port 3000");
});
