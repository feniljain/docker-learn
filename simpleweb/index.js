const express=require('express');
const app=express();

app.get('/', (req, res)=>{
    res.send("Namastey Duniyaa!");
});

app.listen(8080, (err)=>{
    if(err)
     {
         console.log("Error: "+err);
     }
    else{
        console.log("Listening on port 8080");
    }
});