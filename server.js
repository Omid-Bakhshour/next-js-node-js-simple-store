import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";
import productRouter from "./routes/products.js";
import postCategoryRouter from "./routes/postCategory.js";
import postRouter from "./routes/posts.js";
import postCommentRouter from "./routes/postComment.js";
import cookieParser from "cookie-parser";
import postComment from "./models/postComment.js";

import cors from "cors";
dotenv.config();

const app = express();
//set a middleware to parse data
app.use(express.json()); // parses application/json
app.use(express.urlencoded({ extended: true })); // parses application/x-www-form-urlencoded

// Connect to DB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected!!");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

//? Router middleware :
const origin =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://fronthooks.ir";

app.use(cors({ credentials: true, origin }));

app.use(cookieParser(process.env.COOKIE_PARSER_SECRET || "COOKIE PARSER SECRET"));

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/posts", postRouter);
app.use("/api/post-category", postCategoryRouter);
app.use("/api/post-comment", postCommentRouter);

//? PORT
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port ${port}`));
