import mysql from "mysql2/promise";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let sslConfig = undefined;
if (process.env.DB_SSL === "true") {
  const caPath = path.join(__dirname, "../../assets/ca.pem");
  if (fs.existsSync(caPath)) {
    sslConfig = {
      ca: fs.readFileSync(caPath),
      rejectUnauthorized: false,
    };
  } else {
    console.warn("⚠️ ca.pem not found, SSL will not be used");
  }
}

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: sslConfig,
});

export default pool;
