const express = require("express");
const app = express();
const mongo = require("./mongodb");

app.use(express.json());

app.get("/", async (req, resp) => {
  let data = await mongo();
  let result = await data.find().toArray();
  console.log(result);
  resp.send(result);
});
app.post("/", async (req,resp)=>{
  let data = await mongo();
  let result = await data.insert(req.body)
  resp.send(result);
})

app.listen(5000);

