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

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
  cors({
    origin: 'http://localhost:3000'
  })
);

// Add error handling to routes

app.get("/categories", async (req, res) => {
  const categories = await db.query("SELECT * FROM categories");

  res.json(categories);
});

app.get("/countries", async (req, res) => {
  const countries = await db.query("SELECT * FROM countries");

  res.json(countries);
});

app.post("/user", async (req, res) => {
  const formData = req.body.formData;
  console.log(formData);

  // * still need to sanitize fields coming from create user form * //
  await db.query('INSERT INTO users(username, user_pw, nationality) VALUES($1, $2, $3)', [formData.username, formData.password, formData.nationality]);

  res.status(200);
  // res.status(200).redirect('/');
});

app.post("/login", async (req, res) => {
  const formData = req.body.loginFormData;

  // * still need to sanitize fields coming from create user form * //
  const user = await db.query("SELECT * FROM users WHERE username = $1 AND user_pw = $2", [formData.username, formData.password]);

  console.log(user.rowCount);

  if(user.rowCount === 1) {
    res.json(user);
  } else {
    res.status(404).send("<div>User Not Found</div>");
  }

});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});