import express, { Request, Response } from "express";
import { json as bodyParser } from "body-parser";
import cors from "cors";
import mysql2 from "mysql2";

// Setting up server
const app = express();
app.use(cors());
app.use(bodyParser());

// Listen on port 4000
app.listen(4000, () => {
  console.log("listening on port 4000...");
});
