const express = require("express");
const userRouter = require("./routes/users.route");
const errorHandler = require("./middlewares/errorHandler");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

// USERS ROUTE
app.use("/user", userRouter);

// ERROR HANDLER
app.use(errorHandler)

// SERVER RUNNING
app.listen(PORT, () => {
  console.log("Server running on:", PORT);
});
