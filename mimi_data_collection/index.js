const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const { postgresPassword } = require('./config');

// import express from "express";
// import bodyParser from "body-parser";
// import pg from "pg";
// const { postgresPassword } = require('./config');

// Create a new Express application
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// PostgreSQL connection configuration
// const pool = new Pool({
//   user: 'your_postgres_username',
//   host: 'localhost',
//   database: 'your_database_name',
//   password: 'your_database_password',
//   port: 5432, // Default PostgreSQL port
// });

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "mimi",
  password: postgresPassword,
  port: 5432,
});
db.connect();

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
