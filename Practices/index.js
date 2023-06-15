const express = require('express');

const app = express();

app.get('/id/{query}',(req,res)=>{
    res.send('Hello');
    res.end();
})

app.listen(3000,()=>console.log('Listeminggg.....'));