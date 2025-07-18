import express from 'express'
import {initDb, db} from './db.js'

initDb()
const app = express()
app.use(express.json())
    app.post("/create/order/delivery", async (req, res)=>{
        const {name, email, contactNumber, includeDetergent, includeFabcon, deliverAddress, pickupDateTime, deliverDateTime} = req.body
        const query = `
        INSERT INTO orders(name, email, contactNumber, includeDetergent, includeFabcon, deliverAddress, pickupDateTime, deliverDateTime, type)
         VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)
        `
        try{
            await db.execute(query, [name, email, contactNumber, includeDetergent, includeFabcon, deliverAddress, pickupDateTime, deliverDateTime, "delivery"])
            res.sendStatus(200)
        }
        catch(err){
            console.log(err)
            res.sendStatus(500)
        }
        
    })

    app.post("/create/order/pickup", (req, res)=>{
        const {name, email, contactNumber, includeDetergent, includeFabcon, pickupDateTime} = req.body
        console.log('/create/order/pickup: ' + name, email, contactNumber, includeDetergent, includeFabcon, pickupDateTime)
        res.sendStatus(200)

    })

    app.get("/orders/delivery", (req,res)=>{
        db.query("SELECT * FROM orders WHERE type = ?",["delivery"],(err, results)=>{
            if(err){
                res.sendStatus(500)
                console.log(err)
            }
            res.json(results)
        } )
    })

    app.get("/orders/pickup", (req,res)=>{
        db.query("SELECT * FROM orders WHERE type = ?",["pickup"],(err, results)=>{
            if(err){
                res.sendStatus(500)
                console.log(err)
            }
            res.json(results)
        } )
    })

    app.listen(3000, '0.0.0.0', ()=>{
        console.log('API started at port 3000')
    })