import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: "localhost", //127.0.0.1
    port: 3306,
    user: "root",
    password: "ana1234",
    database: "tasksdb"
});