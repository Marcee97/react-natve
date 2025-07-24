import mysql from "mysql2/promise";

export const pool = mysql.createPool({
host: "localhost",
user:"root",
password: "redondos86",
database: "react_native"
})



// export const pool = mysql.createPool({