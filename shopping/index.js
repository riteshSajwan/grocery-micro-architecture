const express = require('express')

const app = express();

app.use(express.json());

app.use('/',(req,res)=>{
    return res.status(200).json({"msg":'Hello world from shopping'});
})

app.listen(8003,()=>{
    console.log("Port running at 8003");
})