const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");


const app = express();
const port = process.env.port || 8080;

connectDB(); //Connects DB

app.use(express.json()); //takes in JSON object as middleware

app.get("/", (req, res) => {
  res.send("app running");
});
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"))
app.use("/api/dashboard", require("./routes/api/dashboard"))

app.listen(port, () => console.log(`App listening on port ${port}`));
