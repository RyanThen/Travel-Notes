import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from 'cors';
import 'dotenv/config';

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3001;

const db = new pg.Client({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PW,
  port: process.env.DATABASE_PORT
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
  cors({
    origin: 'http://localhost:3000'
  })
);

app.get("/categories", async (req, res) => {
  const categories = await db.query("SELECT * FROM categories");

  // let categoryList = [];

  // categories.rows.forEach( category => {
  //   categories.push(category);
  // });

  res.json(categories);
});

app.get("/countries", async (req, res) => {
  const countries = await db.query("SELECT * FROM countries");

  res.json(countries);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});