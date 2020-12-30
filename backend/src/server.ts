import "reflect-metadata";
import "./database";
import * as dotenv from "dotenv";

import express from "express";
import cors from "cors";

import routes from "./routes";

const app = express();
const port = process.env.SERVER_PORT;

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
