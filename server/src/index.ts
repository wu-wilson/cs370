import express, { Request, Response } from "express";
import { json as bodyParser } from "body-parser";
import cors from "cors";
import mysql2 from "mysql2";
import dotenv from "dotenv";

// Setting up server
const app = express();
app.use(cors());
app.use(bodyParser());

// Connect to database
const database = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "AScaonima123",
  database: "rec_hub_db",
});

database.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to database...");
  }
});

// HTTP Requests
app.get("/getUsers", (req: Request, res: Response) => {
  const SAMPLE_GET_QUERY = `SELECT * FROM users`;
  database.query(SAMPLE_GET_QUERY, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(result);
    }
  });
});

// Listen on port 4000
app.listen(4000, () => {
  console.log("listening on port 4000...");
});
