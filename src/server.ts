import express from "express";
import "./MongodbConfig/index";
const app = express();
const port = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

console.log("Hello");

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
