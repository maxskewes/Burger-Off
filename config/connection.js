var mysql = require("mysql");
var connection;
if ( process.env.JAWSDB_URL ) {
  // Database is JawsDB on Heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
   connection = mysql.createConnection({
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
  console.log("connected as id " + conne***ction.threadId);
});

module.exports = connection;
