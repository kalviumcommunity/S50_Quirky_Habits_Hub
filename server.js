const express = require("express");
const app = express();
const port = 3001;
const connectDB = require("./config/connect")
const pingrouter = require("./Routes/ping");
const userrouter = require("./Routes/user");



connectDB()
app.use(express.json());
app.use("/", pingrouter);
app.use("/", userrouter);


app.listen(port, () => {
  console.log(`server is running on localhost ${port}`);
});
