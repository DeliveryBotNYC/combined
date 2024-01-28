const { createPool } = require("mysql");
const fs = require("fs");

const pool = createPool({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.MYSQL_DB,
  // ssl: {
  //   ca: fs.readFileSync("config/ca-certificate.crt"),
  // },
});
module.exports = pool;
