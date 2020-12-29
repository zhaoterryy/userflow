const express = require("express");
const connectDB = require("./config/db");

const app = express();
const port = process.env.port || 8080;

connectDB(); //Connects DB

app.use(express.json()); //takes in JSON object as middleware

app.get("/", (req, res) => {
  res.send("app running");
});
app.use("/api/posts", require("./routes/api/posts"));

app.listen(port, () => console.log(`App listening on port ${port}`));
