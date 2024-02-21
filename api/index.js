import express from "express";
import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://roshanzale:roshanzale@blog-project.krruzrd.mongodb.net/blog-project?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("server is running on port 3000!!");
});
