import express from "express";
import studentRoute from "./routes/studentRoute.js";
import churchRoute from "./routes/churchRoute.js";
import populationRoute from "./routes/populationRoute.js";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";

dotenv.config();
await connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', studentRoute);
app.use('/api', churchRoute);
app.use('/api', populationRoute);



app.listen(5000, () => {
  console.log("Server is running on port 5000");
});