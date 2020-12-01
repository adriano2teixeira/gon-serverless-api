import http from "http";
import app from "./app/app";

const server = http.createServer(app);

const port = process.env.PORT || 3333;
server.listen(port, () =>
  console.log(`Serverless app is running on port ${port}`)
);
