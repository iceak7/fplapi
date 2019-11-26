const fetch = require('node-fetch');
const cors = require("cors");
const express = require("express");

const app = express();
app.use(cors());

app.get("/",(req,res)=>{

  res.send("Test");

});

app.get("/:id",(req,res)=>{



(async function(){
  let data="test";
try{
data = await fetch(`https://fantasy.premierleague.com/api/entry/${req.params.id}/`);
data = await data.json();
res.send(data.player_first_name);


}
catch(err)
{
console.log(err);
}


})();








});

app.listen(3000, ()=>console.log(3000));