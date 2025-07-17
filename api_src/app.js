import express from 'express'
import {initDb, db} from './db.js'

initDb()
const app = express()
app.use(express.json())
    app.post("/create/order/delivery", (req, res)=>{
        const {name, email, contactNumber, includeDetergent, includeFabcon, deliverAddress, pickupDateTime, deliverDateTime} = req.body
        const query = `
        INSERT INTO orders(name, email, contactNumber, includeDetergent, includeFabcon, deliverAddress, pickupDateTime, deliverDateTime)
         VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)
        `
        try{
            db.execute(query, [name, email, contactNumber, includeDetergent, includeFabcon, deliverAddress, pickupDateTime, deliverDateTime, "delivery"])
            res.sendStatus(200)
        }
        catch{
            console.log('/create/order/delivery:' + name, email, contactNumber, includeDetergent, includeFabcon, deliverAddress, pickupDateTime, deliverAddress, deliverDateTime)
        }
        
    })

    app.post("/create/order/pickup", (req, res)=>{
        const {name, email, contactNumber, includeDetergent, includeFabcon, pickupDateTime} = req.body
        console.log('/create/order/pickup: ' + name, email, contactNumber, includeDetergent, includeFabcon, pickupDateTime)
        res.sendStatus(200)
    })

    app.listen(3000, '0.0.0.0', ()=>{
        console.log('api started at port 3000')
    })

