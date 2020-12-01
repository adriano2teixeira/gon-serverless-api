import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import helmet from "helmet";
import cors from "cors";
import Router from "./endpints";
import mongoose from "mongoose";
import db from "./configs/db_config";
import access_control from "./middlewares/access";

const app = express();

// Conectando ao banco de dados mongoDB
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Engatando os middlewares
app.use(cors());
app.use(helmet());
app.use(access_control);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", Router);

export default app;
