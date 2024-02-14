import "express-async-errors";
import { config } from "dotenv-safe";
config();
import express from "express";
const app = express();
const PORT = process.env.PORT || 3333;

import routes from "./routes/index.js";

app.use("/", routes);

// route not found
app.get("*", function (req, res) {
  res.status(404).send();
});

app.use((error, req, res, next) => {
  console.log(error.message);

  return res.sendStatus(500);
});

app.listen(PORT, () => {
  console.log(`Application is running in port: ${PORT}`);
});