const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/users.route");
const errorHandler = require("./middlewares/errorHandler");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

// USERS ROUTE
app.use("/user", userRouter);

// ERROR HANDLER
app.use(errorHandler);

app.use((req, res, next) => {
  res.status(404).json({
    status: false,
    message: "route not found",
  });
  next();
});

// SERVER RUNNING
app.listen(PORT, () => {
  console.log("Server running on:", PORT);
});
