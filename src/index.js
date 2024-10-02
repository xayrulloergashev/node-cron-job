const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cron = require("node-cron");
const { UpdateSatus } = require("./util/node-cron");
const appRouter = require("./router");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 8080;
const mongo_host = "mongodb://127.0.0.1:27017/node-cron-test";

mongoose
  .connect(mongo_host)
  .then(() => {
    console.log("connected db");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  try {
    return res.status(200).json({ message: "Hello Node Cron" });
  } catch (error) {
    console.log(error);
  }
});

cron.schedule("15 43 13 29 * *", () => {
  UpdateSatus();
});

app.use("/api", appRouter);

app.listen(port, () => {
  console.log(`server listen on port : ${port}`);
});
