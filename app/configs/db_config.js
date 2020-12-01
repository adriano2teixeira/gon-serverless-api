import dotenv from "dotenv";

dotenv.config();

const db = process.env.DB_URL;

export default db;
