import express from "express";
import { PORT } from "./config/serverConfig.js";
import apiRouter from "./routers/index.js";
import connectDB from "./config/dbConfig.js";

const app = express();
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running at port ${PORT}`);
  connectDB();
});
