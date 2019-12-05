const fetch = require('node-fetch'); 
const cors = require("cors");
const express = require("express");

const app = express();
app.use(cors());

app.use(express.static(__dirname+"/public"))

app.get("/",(req,res)=>{

  res.send("FPL Api Helper");

});
app.get("/static",(req,res)=>{
  (async function(){
  
    try{
    let url="https://fantasy.premierleague.com/api/bootstrap-static/";
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

app.get("/transfers/:id", (req,res)=>{
  (async function(){
  
    try{
    let url="https://fantasy.premierleague.com/api/entry/"+req.params.id+"/transfers/";
    let data = await fetch(url);
    data = await data.json();
    res.send(data);
    }
    catch(err)
    {
    console.log(err);
    }
  })();
    
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
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("http is running on port 3000"));
