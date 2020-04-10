var mysql = require("mysql");

if ( process.env.JAWSDB_URL ) {
  // Database is JawsDB on Heroku
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Nah1sp1n1",
    database: "burgers_db"
  });
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Nah1sp1n1",
    database: "burgers_db"
  });
}
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
