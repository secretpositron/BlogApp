import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import cors from "cors";
import blogRouter from "./routes/blog-routes";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(
    "mongodb+srv://aryanrajece20:GiO3ZDFuHcBtvrQW@cluster0.ugo5zcx.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("connected to Database and Listening on local host:5000")
  )
  .catch((err) => console.log(err));
//GiO3ZDFuHcBtvrQW
