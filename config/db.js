/*
 * Database connection file.
 */
const mongoose = require("mongoose");

const dbConnection = process.env.DB_URL ?? "mongodb://127.0.0.1:27017/vivek-db"
mongoose.connect(dbConnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.info("Connection Succeed");
});

mongoose.connection.on("error", () => {
  console.info("Error in Connect Mongo");
});

module.exports = mongoose;
