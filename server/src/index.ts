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
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
});

database.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to database...");
  }
});

// HTTP Requests
app.get("/getEmails/:email", (req: Request, res: Response) => {
  const GET_COUNT_QUERY = "SELECT email FROM users WHERE email = ?";
  database.query(GET_COUNT_QUERY, [req.params.email], (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(result);
    }
  });
});

app.get("/getUsernames/:username", (req: Request, res: Response) => {
  const GET_COUNT_QUERY = "SELECT username FROM users WHERE username = ?";
  database.query(GET_COUNT_QUERY, [req.params.username], (err, result) => {
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
