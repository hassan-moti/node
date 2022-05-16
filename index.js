const express = require("express");
require("./mongoose");
const product = require("./menuSch");
const app = express();

app.use(express.json());

app.get("/", async (req, resp) => {
  let data = await product.find();
  resp.send(data);
});
app.post("/", async (req, resp) => {
  let data = new product(req.body);
  let result = await data.save();
  console.log (result);
  resp.send(result);
});
// app.delete("/", async (req, resp) => {
//   let data = await mongo();
//   let result = await data.deleteMany();
// });

app.listen(5000);
