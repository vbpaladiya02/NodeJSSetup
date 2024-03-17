const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const http = require("http");
const server = http.createServer(app);
require("./config/db")
const util = require("./utils/messages");
global.util = util;

app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb', extended: true }));


app.use(require("./routes/index"));

server.listen(process.env.PORT, () => {
  console.info(`server started at ${process.env.PORT}!`);
});
