const express = require("express");
const connectDb = require("./config/database");

const cookieParser = require("cookie-parser");

const app = express();

// Middleware configuration
app.use(express.json());
app.use(cookieParser());

// All Routers
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");

app.use("/", authRouter);

app.use("/", profileRouter);

app.use("/", requestRouter);

// Connect to the database and run the server
connectDb()
  .then(() => {
    console.log("Database connection established");
    app.listen(8888, () => {
      console.log("server is successfully listening on port 8888...");
    });
  })
  .catch((err) => {
    console.log("Database connection error");
  });
