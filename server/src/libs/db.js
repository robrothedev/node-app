require("dotenv").config();
const mysql = require("mysql2");

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: "db_name_here"
});

connection.on("error", function(err) {
  console.log("db connection closed...", err.code);
});

module.exports = (sql, data) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, data, (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
};
