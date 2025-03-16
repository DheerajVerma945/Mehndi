import express from "express";
import { connectDB } from "./utils/db.js";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js"

dotenv.config();

const app = express();


app.use("/api/auth",authRouter)

app.listen(async () => {
  await connectDB();
  console.log("Server is listening on port", process.env.PORT);
});
