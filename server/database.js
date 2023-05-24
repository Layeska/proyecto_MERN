import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: process.env.DB_HOST || "localhost", //127.0.0.1
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER ||"root",
    password: process.env.DB_PASSWORD ||"ana1234", //ana1234
    database: process.env.DB_DATABASE ||"tasks"
});