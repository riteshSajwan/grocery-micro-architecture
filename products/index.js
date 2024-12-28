const express = require('express')

const app = express();

app.use(express.json());

app.use('/',(req,res)=>{
    return res.status(200).json({"msg":'Hello world form product'});
})

app.listen(8002,()=>{
    console.log("Port running at 8002");
})