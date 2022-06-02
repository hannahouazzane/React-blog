const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Laptopsrule1",
  database: "blog",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE tags (id INT(15), tag VARCHAR(255))";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
