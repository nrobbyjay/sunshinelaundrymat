import mysql2 from 'mysql2'

const db = mysql2.createConnection({
        host: 'mysql',
        user: 'root',
        password: 'test123!',
        database: 'sunshinelaundry1'
    }).promise()

export const newDelivery = (name, email, contactNumber, includeDetergent, includeFabcon, deliverAddress, pickupDateTime, deliverDateTime)=>{
    db.execute(`INSERT INTO orders(name, email, contactNumber, includeDetergent, includeFabcon, deliverAddress, pickupDateTime, deliverDateTime, type)
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`,[name, email, contactNumber, includeDetergent, includeFabcon, deliverAddress, pickupDateTime, deliverDateTime, "delivery"], (err)=>{
            if (err){return err}
            return
    })
}

export const newPickup = (name, email, contactNumber, includeDetergent, includeFabcon, pickupDateTime)=>{
    db.execute(`INSERT INTO orders(name, email, contactNumber, includeDetergent, includeFabcon, pickupDateTime, type)
        VALUES(?, ?, ?, ?, ?, ?, ?)`,[name, email, contactNumber, includeDetergent, includeFabcon, pickupDateTime, "pickup"], (err)=>{
            if (err){return err}
            return
    })
}

export const getDeliveries = async ()=>{
    const results = db.execute('SELECT * FROM orders WHERE type = ?',['delivery'], (err)=>{
        if(err){throw err}
    })
    return await results
}

export const getPickups = async ()=>{
    const results = db.execute('SELECT * FROM orders WHERE type = ?',['pickup'], (err)=>{
        if(err){throw err}
    })
    return await results   
}
