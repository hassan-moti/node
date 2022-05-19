const express = require("express");
require("./mongoose");
const product = require("./menu");
const app = express();

app.use(express.json());

app.get("/", async (req, resp) => {
  let data = await product.find();
  
  // const data2= data.forEach(object=>{
  //   delete object['price'];
  // });
  // console.log(data2);

//   let txt = "";
//   data.forEach(myfunction);
// console.log(txt)
//   function myfunction(value){
    
// for (let x in value) {
//   txt += value[x] + " ";
// }
//   }
  // for (let element of data) {
  //  let data2 = element;
  //   console.log(data2);
  // }
  resp.send(data);
});
app.post("/", async (req, resp) => {
  let data = new product(req.body);
  let result = await data.save();
  resp.send(result);
});
app.delete("/delete/:_id", async (req, resp) => {
  let data = await product.deleteOne(req.params);
  resp.send(data);
});

app.put("/update/:_id", async (req, resp) => {
  let data = await product.updateOne(req.params, {
    $set: req.body,
  });
  resp.send(data);
});

app.listen(5000);
