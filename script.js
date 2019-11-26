const fetch = require('node-fetch'); 
const cors = require("cors");
const express = require("express");

const app = express();
app.use(cors());

app.use(express.static(__dirname+"/public"))

app.get("/",(req,res)=>{

  res.send("Test");

});

app.get("/:id",(req,res)=>{

  console.log(req.params.id);

(async function(){
  
try{
let url="https://fantasy.premierleague.com/api/entry/"+req.params.id+"/";
let data = await fetch(url);
data = await data.json()

res.send(data);


}
catch(err)
{
console.log(err);
}


})();








});

app.listen(3000, ()=>console.log(3000));