const express = require("express")

const app = express()

app.get("/", (req, res)=>{
    res.send('testing')
})

app.listen(3000, '0.0.0.0', ()=>{
    console.log('api started at port 3000')
})