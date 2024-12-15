import express from "express";
import { PORT } from "./config/serverConfig.js";
import apiRouter from "./routers/index.js";
import connectDB from "./config/dbConfig.js";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRouter);

connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(PORT, () => {
      console.log(`Server is successfully listening on Port ${PORT}...`);
    }); //callback function is executed when the server is up and running
  })
  .catch((err) => {
    console.error("Database cannot be connected");
  });
