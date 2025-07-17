const express = require("express")
const app = express()
app.use(express.json())

app.post("/create/order/delivery", (req, res)=>{
    const {name, email, contactNumber, includeDetergent, includeFabcon, deliverAddress, pickupDateTime, deliverDateTime} = req.body
    console.log('/create/order/pickup:' + name, email, contactNumber, includeDetergent, includeFabcon, deliverAddress, pickupDateTime, deliverAddress, deliverDateTime)
    res.sendStatus(200)
})

app.post("/create/order/pickup", (req, res)=>{
    const {name, email, contactNumber, includeDetergent, includeFabcon, pickupDateTime} = req.body
    console.log('/create/order/pickup:' + name, email, contactNumber, includeDetergent, includeFabcon, pickupDateTime)
    res.sendStatus(200)
})

app.listen(3000, '0.0.0.0', ()=>{
    console.log('api started at port 3000')
})