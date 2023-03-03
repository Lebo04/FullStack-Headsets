const express = require("express");
const route = require("./controller");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const port = parseInt(process.env.PORT) || 3000;
const app = express();
const {errorHandling} = require('./middleware/ErrorHandling')

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(
  route,
  express.json,
  express.urlencoded({ extended: false }),
  cors({
    origin: "",
  }),
  cookieParser()
);

// Server is running
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// app.use(errorHandling)