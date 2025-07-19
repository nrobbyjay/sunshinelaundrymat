import {Router} from 'express'

import {con} from './db.js'

export const router = Router() 

router.post("/create/order/delivery", async (req, res) => {
    const { name, email, contactNumber, includeDetergent, includeFabcon, deliverAddress, pickupDateTime, deliverDateTime } = req.body
    const query = `
        INSERT INTO orders(name, email, contactNumber, includeDetergent, includeFabcon, deliverAddress, pickupDateTime, deliverDateTime, type)
         VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)
        `
    try {
        let db = con()
        await db.execute(query, [name, email, contactNumber, includeDetergent, includeFabcon, deliverAddress, pickupDateTime, deliverDateTime, "delivery"])
        res.sendStatus(200)
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    }

})

//undone
router.post("/create/order/pickup", (req, res) => {
    const { name, email, contactNumber, includeDetergent, includeFabcon, pickupDateTime } = req.body
    console.log('/create/order/pickup: ' + name, email, contactNumber, includeDetergent, includeFabcon, pickupDateTime)
    res.sendStatus(200)

})

router.get("/orders/delivery", (req, res) => {
    let db = con()
    db.query("SELECT * FROM orders WHERE type = ?", ["delivery"], (err, results) => {
        if (err) {
            res.sendStatus(500)
            console.log(err)
        }
        res.json(results)
    })
})

router.get("/orders/pickup", (req, res) => {
    let db = con()
    db.query("SELECT * FROM orders WHERE type = ?", ["pickup"], (err, results) => {
        if (err) {
            res.sendStatus(500)
            console.log(err)
        }
        res.json(results)
    })
})