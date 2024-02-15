import "express-async-errors";
import { config } from "dotenv-safe";
config();
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 3333;

import routes from "./routes/index.js";
import database from "./config/db.js";
// import { User } from "./models/user.js";
// import { Posts } from "./models/post.js";

// (async () => {
//   try {
//     await database.sync({alter: true});

//     console.log('terminou')
//   } catch (error) {
//     console.log(error)
//   }
// })()

app.use(helmet());
app.use(morgan("tiny"));

app.use("/", routes);

// route not found
app.get("*", function (req, res) {
  res.status(404).send();
});

app.use((error, req, res, next) => {
  console.log(error.message);

  return res.sendStatus(500);
});

database.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Application is running in port: ${PORT}`);
  });
});