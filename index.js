const express = require("express");
require("./mongoose");
const product = require("./menu");
const app = express();

app.use(express.json());

app.get("/", async (req, resp) => {
  let data = await product.find();
  const copyItems = [];
  
  for (let i = 0; i < data.length; i++) {
    const newItem = { productName: data[i].productName, price: data[i].price, imageTitle: data[i].imageTitle  }
     
    copyItems.push(newItem);
  }
  console.log(copyItems);
  resp.send(copyItems);

});
app.post("/", async (req, resp) => {
  let data = new product(req.body);
  let result = await data.save();
  resp.send(result);
});
app.delete("/delete/:productName", async (req, resp) => {
  let data = await product.deleteOne(req.params);
  resp.send(data);
});

app.put("/update/:productName", async (req, resp) => {
  let data = await product.updateOne(req.params, {
    $set: req.body,
  });
  resp.send(data);
});

app.listen(5000);
