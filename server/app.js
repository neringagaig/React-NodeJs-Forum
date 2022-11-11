const express = require("express");
const mongoose = require("mongoose");
require("express-async-errors");
const postsRouter = require("./controllers/posts");
const usersRouter = require("./controllers/users");
const threadsRouter = require("./controllers/threads");
const loginRouter = require("./controllers/login");
const middleware = require("./utils/middleware");

const { dbconfig } = require("./utils/config");

const app = express();
const cors = require("cors");

const logger = require("./utils/logger");
logger.info("connecting to", dbconfig);

mongoose
  .connect(dbconfig.host)
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connection to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.static("build"));
app.use("/public", express.static("public"));
app.use(express.json());
app.use(middleware.requestLogger);

app.use("/api/posts", postsRouter);
app.use("/api/users", usersRouter);
app.use("/api/threads", threadsRouter);
app.use("/api/login", loginRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
