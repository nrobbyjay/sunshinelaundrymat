const express = require("express")

const app = express()

app.get("/", (req, res)=>{
    res.send('testing')
})

app.listen(3000, '0.0.0.0', ()=>{
    console.log('serving at 3000')
})