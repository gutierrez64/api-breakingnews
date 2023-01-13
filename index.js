const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDatabase = require("./src/database/db");

const userRoute = require("./src/routes/user.route");

dotenv.config();

const port = process.env.PORT || 3000;

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);


app.listen(port, () => console.log(`API listening on port: ${port}`));