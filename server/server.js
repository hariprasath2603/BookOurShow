const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorhandler");

connectDB();
dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/v1/users", userRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
