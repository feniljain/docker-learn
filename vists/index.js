const express=require('express');
const redis=require('redis');
const process=require('process');

const app=express();
const client=redis.createClient({
    host: 'redis-server',
    port: 6379
});
client.set('visits', 0);

app.get('/', (req, res)=>{
    client.get('vists', (err, vists)=>{
        process.exit(1);
        if(!err)
         {
            res.send("Number of vists is:"+vists);
            client.set('visits', parseInt(vists)+1);
         }
        else{
            console.log('Error....'+err);
        }
    });
});

app.listen(8081, (err)=>{
    if(!err)
     {
         console.log("Listening at port 8081");
     }
    else{
        console.log("Error: "+err);
    }
});
