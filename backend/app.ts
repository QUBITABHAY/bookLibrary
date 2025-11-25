import express from "express";
import routes from "./src/routes/index";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Ok");
});

app.use(routes);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
