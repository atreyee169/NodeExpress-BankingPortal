const fs=require('fs');
const path=require('path');
const express=require('express');
const app=express();
app.set("views",path.join(__dirname,'views'));
app.set("view engine",'ejs');
app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(request,response){
  response.render("index",{title:'Index'});
});

app.listen(3000,function(){
  console.log("PS Project Running on port 3000!");
});

const accountData=fs.readFileSync(path.join(__dirname,'json','accounts.json'),'utf8');
const accounts=JSON.parse(accountData);
