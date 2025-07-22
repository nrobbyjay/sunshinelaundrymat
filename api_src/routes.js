import {Router} from 'express'

import {getDeliveries, getPickups, newDelivery, newPickup} from './db.js'
import {FailReturns} from './responses.js'

export const router = Router() 

router.post("/create/order/delivery", async (req, res) => {
    const { name, email, contactNumber, includeDetergent, includeFabcon, deliverAddress, pickupDateTime, deliverDateTime } = req.body
    try{
        newDelivery(name, email, contactNumber, includeDetergent, includeFabcon, deliverAddress, pickupDateTime, deliverDateTime)
        res.sendStatus(200)
    }catch(err){
        FailReturns(err)
    }

})

router.post("/create/order/pickup", (req, res) => {
    const { name, email, contactNumber, includeDetergent, includeFabcon, pickupDateTime } = req.body
    try{
        newPickup(name, email, contactNumber, includeDetergent, includeFabcon, pickupDateTime)
        res.sendStatus(200)
    }catch(err){
        FailReturns(err)
    }

})

router.get("/orders/delivery", async (req, res) => {
     try{
        const sd = await getDeliveries()
        res.json(await sd[0])
    }catch(err){
        res.send(FailReturns(err))
    }
})

router.get("/orders/pickup", async (req, res) => {
     try{
        const sd = await getPickups()
        res.json(await sd[0])
    }catch(err){
        res.send(FailReturns(err))
    }
})
