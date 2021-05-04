import express from "express";
import bodyParser from "body-parser";

import userRoutes from "./Routes/user.js";

const app = express();
const PORT = 5000;
// var parser = bodyParser.json();
// app.use(parser);
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  next();
});

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  console.log("information from local server using get api");
  res.send("hello from homepage");
});

app.listen(PORT, () => console.log(`server Running in :localhost:${PORT}`));
