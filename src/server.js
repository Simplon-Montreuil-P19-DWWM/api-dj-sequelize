const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const {sequelize} = require("./models");
require("dotenv").config();

const routes = require("./routes");

const { notFoundHandler, errorLogger, errorHandler } = require("./middlewares");

const server = express();

server.use(helmet());
server.use(logger("dev"));
server.use(bodyParser.json());

server.use("/api", cors());

server.use("/api", routes);

server.use("*", notFoundHandler);
server.use(errorLogger);
server.use(errorHandler);

// sequelize
// .authenticate()
// .then(() => {
//     console.log("Connection has been established successfully.");
//   })
// .catch(error => {
//     console.error("Unable to connect to the database:", error);
//   });

// sequelize.sync({ force: true }).then(() => {
//   console.log("Database & tables created!")
// });


// module.exports = sequelize;
module.exports = server;
