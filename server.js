import express from "express";
import studentRoute from "./routes/studentRoute.js";
import churchRoute from "./routes/churchRoute.js";
import populationRoute from "./routes/populationRoute.js";
import ecommerceRoute from "./routes/ecommerceRoute.js";
import transactionRoute from "./routes/transactionRoute.js";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";

dotenv.config();
await connectDB();

const app = express();
app.use(express.json());
app.use(cors({ 
  origin: "http://localhost:3000",
  methods: ["POST", "GET", "PUT", "DELETE"],
  allowedHeaders: ["X-API-KEY", "Content-Type"],
  credentials: true
 }));

const authenticateApiKey = (req, res, next) => {
  const requiredApiKey = process.env.BACKEND_API_KEY;
  const apiKey = req.headers['x-api-key'];


  if (!apiKey || apiKey !== requiredApiKey) {
    return res.status(403).json({ message: 'Forbidden: Invalid API Key' })
  }

  next();
} 

app.use('/api', authenticateApiKey);


app.use('/api', studentRoute);
app.use('/api', churchRoute);
app.use('/api', populationRoute);
app.use('/api', ecommerceRoute);
app.use('/api', transactionRoute);


app.listen(5000, () => {
  console.log("Server is running on port 5000");
});