// imports
import mysql from "mysql";

// defines
const con = mysql.createConnection({
  host: "localhost",
  user: "turgunov",
  password: "root",
  database: "first",
  port: 3306,
});

// exports
export default con;
