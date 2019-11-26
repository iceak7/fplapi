const fetch = require('node-fetch');
const cors = require("cors");
const express = require("express");

const app = express();
app.use(cors());

app.get("/:id",(req,res)=>{



(async function(){
  let data="test";
try{
data = await fetch(`https://fantasy.premierleague.com/api/leagues-classic/${req.params.id}/standings/`);
data = await data.json();
res.send(data);


}
catch(err)
{
console.log(err);
}


})();








});

app.listen(3000, ()=>console.log(3000));